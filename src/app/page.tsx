'use client'

import { useState, useEffect, useRef } from 'react'
import { Camera, Upload, MessageCircle, Settings as SettingsIcon, Plus, Edit, Send, Trash2, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import CameraCapture from '@/components/CameraCapture'
import SettingsDialog from '@/components/SettingsDialog'
import TemplateManagementDialog from '@/components/TemplateManagementDialog'

interface BusinessCard {
  id: string
  imagePath: string
  companyName?: string
  name?: string
  email?: string
  phone?: string
  address?: string
  notes?: string
  createdAt: string
  messageHistory?: Array<{
    id: string
    message: string
    status: string
    createdAt: string
  }>
}

interface MessageTemplate {
  id: string
  name: string
  content: string
  createdAt: string
}

interface Settings {
  id: string
  autoSendEnabled: boolean
  autoSendTemplateId?: string
  defaultSenderPhone?: string
}

interface UserProfile {
  id: string
  name?: string
  companyName?: string
  email?: string
  phone?: string
  address?: string
  title?: string
}

export default function Home() {
  const [businessCards, setBusinessCards] = useState<BusinessCard[]>([])
  const [templates, setTemplates] = useState<MessageTemplate[]>([])
  const [settings, setSettings] = useState<Settings | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [selectedCard, setSelectedCard] = useState<BusinessCard | null>(null)
  const [editingCard, setEditingCard] = useState<BusinessCard | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [showCameraDialog, setShowCameraDialog] = useState(false)
  const [showTemplateDialog, setShowTemplateDialog] = useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [smsMessage, setSmsMessage] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [messageType, setMessageType] = useState<'custom' | 'template' | 'ai'>('custom')
  const [captureMode, setCaptureMode] = useState<'file' | 'camera'>('file')
  const [isDragging, setIsDragging] = useState(false)
  const [messagePreview, setMessagePreview] = useState('')
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [showDebugInfo, setShowDebugInfo] = useState(false)
  
  // 파일 입력 참조
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 초기 데이터 로드
  useEffect(() => {
    fetchBusinessCards()
    fetchTemplates()
    fetchSettings()
    fetchUserProfile()
  }, [])

  // 메시지 미리보기 업데이트
  useEffect(() => {
    updateMessagePreview()
  }, [messageType, selectedTemplate, smsMessage, selectedCard, templates, userProfile])

  const fetchBusinessCards = async () => {
    try {
      const response = await fetch('/api/business-cards')
      
      if (!response.ok) {
        console.error('API 응답 에러:', response.status, response.statusText)
        setBusinessCards([]) // 에러 시 빈 배열로 설정
        return
      }
      
      const data = await response.json()
      
      // 데이터가 배열인지 확인
      if (Array.isArray(data)) {
        setBusinessCards(data)
      } else {
        console.error('API 응답이 배열이 아닙니다:', data)
        setBusinessCards([])
      }
    } catch (error) {
      console.error('명함 목록 로드 실패:', error)
      setBusinessCards([]) // 에러 시 빈 배열로 설정
    }
  }

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/message-templates')
      
      if (!response.ok) {
        console.error('API 응답 에러:', response.status, response.statusText)
        setTemplates([]) // 에러 시 빈 배열로 설정
        return
      }
      
      const data = await response.json()
      
      // 데이터가 배열인지 확인
      if (Array.isArray(data)) {
        setTemplates(data)
      } else {
        console.error('API 응답이 배열이 아닙니다:', data)
        setTemplates([])
      }
    } catch (error) {
      console.error('템플릿 목록 로드 실패:', error)
      setTemplates([]) // 에러 시 빈 배열로 설정
    }
  }

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings')
      
      if (!response.ok) {
        console.error('API 응답 에러:', response.status, response.statusText)
        setSettings(null) // 에러 시 null로 설정
        return
      }
      
      const data = await response.json()
      setSettings(data)
    } catch (error) {
      console.error('설정 로드 실패:', error)
      setSettings(null) // 에러 시 null로 설정
    }
  }

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/user-profile')
      
      if (!response.ok) {
        console.error('API 응답 에러:', response.status, response.statusText)
        setUserProfile(null) // 에러 시 null로 설정
        return
      }
      
      const data = await response.json()
      setUserProfile(data)
    } catch (error) {
      console.error('프로필 로드 실패:', error)
      setUserProfile(null) // 에러 시 null로 설정
    }
  }

  // 메시지 미리보기 업데이트
  const updateMessagePreview = async () => {
    if (!selectedCard) return

    let preview = ''
    
    if (messageType === 'custom') {
      preview = smsMessage
    } else if (messageType === 'template' && selectedTemplate) {
      const template = templates.find(t => t.id === selectedTemplate)
      preview = template?.content || ''
    } else if (messageType === 'ai') {
      // AI 메시지 생성 미리보기
      if (userProfile && selectedCard) {
        const profileInfo = [
          userProfile.name && `이름: ${userProfile.name}`,
          userProfile.title && `직책: ${userProfile.title}`,
          userProfile.companyName && `회사: ${userProfile.companyName}`,
          userProfile.email && `이메일: ${userProfile.email}`,
          userProfile.phone && `연락처: ${userProfile.phone}`,
        ].filter(Boolean).join('\n')
        
        preview = `안녕하세요! ${selectedCard.name || '고객'}님께 제 명함을 전해드립니다.\n\n${profileInfo}\n\n앞으로 좋은 관계 유지했으면 좋겠습니다. 감사합니다!`
      }
    }
    
    setMessagePreview(preview)
  }



  // 카메라 촬영 처리
  const handleCameraCapture = async (imageBlob: Blob) => {
    console.log('📤 이미지 전송 시작...', {
      blobSize: imageBlob.size,
      blobType: imageBlob.type,
      currentURL: window.location.href
    })
    
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('image', imageBlob, 'business-card.jpg')

      // 현재 호스트 정보를 기반으로 절대 URL 생성
      const apiUrl = `${window.location.origin}/api/business-cards`
      console.log('🚀 API 호출 URL:', apiUrl)

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })

      console.log('📡 카메라 캡처 API 응답 상태:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        url: response.url
      })

      if (response.ok) {
        const newCard = await response.json()
        console.log('✅ 카메라 캡처 명함 등록 성공:', newCard)
        fetchBusinessCards()
        setShowCameraDialog(false)
        
        // 자동발송 결과 표시
        if (newCard.autoSend) {
          if (newCard.autoSend.success) {
            alert(`명함이 성공적으로 등록되었습니다!\n\n자동발송도 완료되었습니다.\n템플릿: ${newCard.autoSend.template}`)
          } else {
            alert(`명함이 성공적으로 등록되었습니다!\n\n자동발송 실패: ${newCard.autoSend.error}`)
          }
        } else {
          alert('명함이 성공적으로 등록되었습니다!')
        }
      } else {
        console.error('❌ 카메라 캡처 API 오류 응답:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        })
        
        try {
          const errorData = await response.json()
          console.error('❌ 카메라 캡처 에러 세부 정보:', errorData)
          alert(`명함 업로드에 실패했습니다: ${errorData.error}`)
        } catch (parseError) {
          console.error('❌ 카메라 캡처 에러 응답 파싱 실패:', parseError)
          const errorText = await response.text()
          console.error('❌ 카메라 캡처 에러 응답 텍스트:', errorText)
          alert(`명함 업로드에 실패했습니다 (상태 코드: ${response.status})`)
        }
      }
    } catch (error) {
      console.error('❌ 카메라 캡처 네트워크 오류:', error)
      alert('명함 업로드 중 네트워크 오류가 발생했습니다.')
    } finally {
      setIsUploading(false)
    }
  }

  // 파일 업로드 처리
  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.')
      return
    }

    console.log('📁 파일 업로드 시작...', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      currentURL: window.location.href
    })

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('image', file)

      // 현재 호스트 정보를 기반으로 절대 URL 생성
      const apiUrl = `${window.location.origin}/api/business-cards`
      console.log('🚀 API 호출 URL:', apiUrl)

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const newCard = await response.json()
        fetchBusinessCards()
        setShowCameraDialog(false)
        
        // 자동발송 결과 표시
        if (newCard.autoSend) {
          if (newCard.autoSend.success) {
            alert(`명함이 성공적으로 등록되었습니다!\n\n자동발송도 완료되었습니다.\n템플릿: ${newCard.autoSend.template}`)
          } else {
            alert(`명함이 성공적으로 등록되었습니다!\n\n자동발송 실패: ${newCard.autoSend.error}`)
          }
        } else {
          alert('명함이 성공적으로 등록되었습니다!')
        }
      } else {
        const errorData = await response.json()
        alert(`명함 업로드에 실패했습니다: ${errorData.error}`)
      }
    } catch (error) {
      console.error('업로드 실패:', error)
      alert('명함 업로드 중 오류가 발생했습니다.')
    } finally {
      setIsUploading(false)
    }
  }

  // 파일 선택 관련 함수들
  const handleFileSelectClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      handleFileUpload(file)
    }
  }

  // 다이얼로그 관련 함수들
  const handleOpenDialog = () => {
    setCaptureMode('file')
    setShowCameraDialog(true)
  }

  const handleCameraCancel = () => {
    setShowCameraDialog(false)
    setCaptureMode('file')
    setIsDragging(false)
  }

  // SMS 발송
  const sendSMS = async () => {
    if (!selectedCard) return

    setIsSending(true)
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessCardId: selectedCard.id,
          message: messageType === 'custom' ? smsMessage : undefined,
          templateId: messageType === 'template' ? selectedTemplate : undefined,
          useAI: messageType === 'ai',
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        alert('문자가 성공적으로 발송되었습니다!')
        fetchBusinessCards()
        setShowSendDialog(false)
        setSmsMessage('')
        setSelectedTemplate('')
      } else {
        alert(`문자 발송에 실패했습니다: ${result.error}`)
      }
    } catch (error) {
      console.error('SMS 발송 실패:', error)
      alert('문자 발송 중 오류가 발생했습니다.')
    } finally {
      setIsSending(false)
    }
  }

  // 명함 정보 업데이트
  const updateBusinessCard = async (id: string, updates: Partial<BusinessCard>) => {
    try {
      const response = await fetch(`/api/business-cards/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        fetchBusinessCards()
        setEditingCard(null)
        alert('명함 정보가 업데이트되었습니다!')
      } else {
        alert('명함 정보 업데이트에 실패했습니다.')
      }
    } catch (error) {
      console.error('명함 업데이트 실패:', error)
      alert('명함 업데이트 중 오류가 발생했습니다.')
    }
  }

  // 명함 삭제
  const deleteBusinessCard = async (id: string) => {
    try {
      const response = await fetch(`/api/business-cards/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchBusinessCards()
        alert('명함이 삭제되었습니다!')
      } else {
        alert('명함 삭제에 실패했습니다.')
      }
    } catch (error) {
      console.error('명함 삭제 실패:', error)
      alert('명함 삭제 중 오류가 발생했습니다.')
    }
  }

  // 메시지 발송 다이얼로그 열기
  const openSendDialog = (card: BusinessCard) => {
    setSelectedCard(card)
    setMessageType('custom')
    setSmsMessage('')
    setSelectedTemplate('')
    setShowSendDialog(true)
  }

  // 시스템 진단
  const runHealthCheck = async () => {
    try {
      const response = await fetch('/api/health')
      const data = await response.json()
      setDebugInfo(data)
      setShowDebugInfo(true)
    } catch (error) {
      setDebugInfo({
        status: 'error',
        message: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString()
      })
      setShowDebugInfo(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">명함 관리 시스템</h1>
          <div className="flex gap-2">
            <Dialog open={showCameraDialog} onOpenChange={setShowCameraDialog}>
              <DialogTrigger asChild>
                <Button onClick={handleOpenDialog} className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  명함 등록
                </Button>
              </DialogTrigger>
                          <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>명함 등록</DialogTitle>
                <DialogDescription>
                  카메라로 촬영하거나 파일을 업로드해서 명함을 등록하세요.
                </DialogDescription>
              </DialogHeader>
                {isUploading ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <span className="text-lg font-medium">명함 정보를 추출하는 중...</span>
                    <p className="text-sm text-gray-600">잠시만 기다려주세요.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* 방식 선택 버튼 */}
                    <div className="flex space-x-2">
                      <Button
                        variant={captureMode === 'file' ? 'default' : 'outline'}
                        onClick={() => setCaptureMode('file')}
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        파일 업로드
                      </Button>
                      <Button
                        variant={captureMode === 'camera' ? 'default' : 'outline'}
                        onClick={() => setCaptureMode('camera')}
                        className="flex-1"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        카메라 촬영
                      </Button>
                    </div>

                    {/* 파일 업로드 모드 */}
                    {captureMode === 'file' && (
                      <div className="space-y-4">
                        <div 
                          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                            isDragging 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                        >
                          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <div className="space-y-2">
                            <p className="text-lg font-medium text-gray-700">
                              {isDragging ? '파일을 여기에 드롭하세요' : '명함 이미지를 선택하세요'}
                            </p>
                            <p className="text-sm text-gray-500">
                              클릭하여 파일 선택 또는 드래그 앤 드롭
                            </p>
                            <p className="text-xs text-gray-400">
                              모바일에서는 카메라 앱이 자동으로 실행됩니다
                            </p>
                          </div>
                          <Button 
                            onClick={handleFileSelectClick}
                            className="mt-4"
                            type="button"
                          >
                            파일 선택
                          </Button>
                        </div>
                        
                        {/* 숨겨진 파일 입력 */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          capture="environment"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        
                        <div className="flex justify-end">
                          <Button onClick={handleCameraCancel} variant="outline">
                            취소
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* 카메라 촬영 모드 */}
                    {captureMode === 'camera' && (
                      <CameraCapture 
                        onCapture={handleCameraCapture}
                        onCancel={handleCameraCancel}
                        debug={true}
                      />
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline"
              onClick={() => setShowTemplateDialog(true)}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              템플릿 관리
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => setShowSettingsDialog(true)}
            >
              <SettingsIcon className="mr-2 h-4 w-4" />
              설정
            </Button>
            
            <Button 
              variant="outline"
              onClick={runHealthCheck}
              className="text-xs"
            >
              🔧 시스템 진단
            </Button>
          </div>
        </div>

        {/* 명함 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessCards.map((card) => (
            <Card key={card.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{card.name || '이름 없음'}</CardTitle>
                    <p className="text-sm text-gray-600">{card.companyName || '회사명 없음'}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingCard(card)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openSendDialog(card)}
                      disabled={!card.phone}
                    >
                      <Send className="h-4 w-4" />
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>명함 삭제</AlertDialogTitle>
                          <AlertDialogDescription>
                            "{card.name || '이름 없음'}" 명함을 삭제하시겠습니까?
                            이 작업은 되돌릴 수 없습니다.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>취소</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteBusinessCard(card.id)}>
                            삭제
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {card.email && (
                    <p className="text-sm text-gray-600">📧 {card.email}</p>
                  )}
                  {card.phone && (
                    <p className="text-sm text-gray-600">📞 {card.phone}</p>
                  )}
                  {card.address && (
                    <p className="text-sm text-gray-600">📍 {card.address}</p>
                  )}
                  {card.notes && (
                    <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                      💭 {card.notes}
                    </p>
                  )}
                  {card.messageHistory && card.messageHistory.length > 0 && (
                    <div className="mt-2">
                      <Badge variant="outline">
                        마지막 발송: {new Date(card.messageHistory[0].createdAt).toLocaleDateString()}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {businessCards.length === 0 && (
          <div className="text-center py-12">
            <Plus className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">명함이 없습니다</h3>
            <p className="text-gray-600">첫 명함을 등록해보세요!</p>
          </div>
        )}

        {/* 명함 수정 다이얼로그 */}
        {editingCard && (
          <Dialog open={!!editingCard} onOpenChange={() => setEditingCard(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>명함 정보 수정</DialogTitle>
                <DialogDescription>
                  명함의 정보를 수정하고 저장하세요.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">이름</Label>
                    <Input
                      id="edit-name"
                      value={editingCard.name || ''}
                      onChange={(e) => setEditingCard({ ...editingCard, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-company">회사명</Label>
                    <Input
                      id="edit-company"
                      value={editingCard.companyName || ''}
                      onChange={(e) => setEditingCard({ ...editingCard, companyName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-email">이메일</Label>
                    <Input
                      id="edit-email"
                      value={editingCard.email || ''}
                      onChange={(e) => setEditingCard({ ...editingCard, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-phone">전화번호</Label>
                    <Input
                      id="edit-phone"
                      value={editingCard.phone || ''}
                      onChange={(e) => setEditingCard({ ...editingCard, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-address">주소</Label>
                  <Input
                    id="edit-address"
                    value={editingCard.address || ''}
                    onChange={(e) => setEditingCard({ ...editingCard, address: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-notes">추가 정보</Label>
                  <Textarea
                    id="edit-notes"
                    value={editingCard.notes || ''}
                    onChange={(e) => setEditingCard({ ...editingCard, notes: e.target.value })}
                    rows={3}
                    placeholder="만났던 내용, 특징 등을 기록하세요..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => updateBusinessCard(editingCard.id, editingCard)}
                    className="flex-1"
                  >
                    저장
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setEditingCard(null)}
                    className="flex-1"
                  >
                    취소
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* 문자 발송 다이얼로그 */}
        {selectedCard && (
          <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>문자 발송</DialogTitle>
                <DialogDescription>
                  선택한 명함 소유자에게 문자 메시지를 발송합니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p>받는 사람: {selectedCard.name} ({selectedCard.phone})</p>
                </div>
                
                <div>
                  <Label>메시지 유형</Label>
                  <Select value={messageType} onValueChange={(value: 'custom' | 'template' | 'ai') => setMessageType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">직접 입력</SelectItem>
                      <SelectItem value="template">템플릿 사용</SelectItem>
                      <SelectItem value="ai">AI 자동 작성</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {messageType === 'template' && (
                  <div>
                    <Label>템플릿 선택</Label>
                    <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                      <SelectTrigger>
                        <SelectValue placeholder="템플릿을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {messageType === 'custom' && (
                  <div>
                    <Label htmlFor="sms-message">메시지</Label>
                    <Textarea
                      id="sms-message"
                      value={smsMessage}
                      onChange={(e) => setSmsMessage(e.target.value)}
                      placeholder="발송할 메시지를 입력하세요..."
                      rows={4}
                    />
                  </div>
                )}

                {messageType === 'ai' && (
                  <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                    <p>AI가 명함 정보와 추가 메모를 바탕으로 자동으로 메시지를 작성합니다.</p>
                  </div>
                )}

                {/* 메시지 미리보기 */}
                {messagePreview && (
                  <div>
                    <Label>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        발송 예정 메시지 미리보기
                      </div>
                    </Label>
                    <div className="border rounded-lg p-3 bg-gray-50 text-sm whitespace-pre-wrap">
                      {messagePreview}
                    </div>
                  </div>
                )}

                <Button
                  onClick={sendSMS}
                  disabled={isSending || (messageType === 'custom' && !smsMessage) || (messageType === 'template' && !selectedTemplate) || !messagePreview}
                  className="w-full"
                >
                  {isSending ? '발송 중...' : '문자 발송'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* 설정 다이얼로그 */}
        <SettingsDialog
          open={showSettingsDialog}
          onOpenChange={setShowSettingsDialog}
          templates={templates}
          onRefreshTemplates={fetchTemplates}
        />

        {/* 템플릿 관리 다이얼로그 */}
        <TemplateManagementDialog
          open={showTemplateDialog}
          onOpenChange={setShowTemplateDialog}
          templates={templates}
          onRefreshTemplates={fetchTemplates}
        />

        {/* 시스템 진단 다이얼로그 */}
        {debugInfo && (
          <Dialog open={showDebugInfo} onOpenChange={setShowDebugInfo}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>시스템 진단 결과</DialogTitle>
                <DialogDescription>
                  API와 데이터베이스 연결 상태를 확인합니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-3 h-3 rounded-full ${debugInfo.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="font-medium">
                      상태: {debugInfo.status === 'healthy' ? '정상' : '오류'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    시간: {debugInfo.timestamp}
                  </div>
                </div>

                {debugInfo.database && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">📊 데이터베이스 상태</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>사용자 프로필: {debugInfo.database.userProfiles}개</div>
                      <div>명함: {debugInfo.database.businessCards}개</div>
                      <div>템플릿: {debugInfo.database.templates}개</div>
                      <div>설정: {debugInfo.database.settings}개</div>
                    </div>
                  </div>
                )}

                {debugInfo.environment && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">🌐 환경 정보</h4>
                    <div className="text-sm space-y-1">
                      <div>환경: {debugInfo.environment.nodeEnv}</div>
                      <div>런타임: {debugInfo.environment.runtime}</div>
                      <div>지역: {debugInfo.environment.region}</div>
                    </div>
                  </div>
                )}

                {debugInfo.error && (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-700">❌ 오류 정보</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>타입:</strong> {debugInfo.error.name}</div>
                      <div><strong>메시지:</strong> {debugInfo.error.message}</div>
                      {debugInfo.error.stack && (
                        <div>
                          <strong>스택:</strong>
                          <pre className="mt-1 text-xs bg-gray-100 p-2 rounded overflow-auto">
                            {debugInfo.error.stack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button onClick={runHealthCheck} variant="outline" className="flex-1">
                    🔄 다시 확인
                  </Button>
                  <Button onClick={() => setShowDebugInfo(false)} className="flex-1">
                    닫기
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}
