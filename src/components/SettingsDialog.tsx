'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Phone, RefreshCw } from 'lucide-react'

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

interface MessageTemplate {
  id: string
  name: string
  content: string
}

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  templates: MessageTemplate[]
  onRefreshTemplates: () => void
}

export default function SettingsDialog({ 
  open, 
  onOpenChange, 
  templates, 
  onRefreshTemplates 
}: SettingsDialogProps) {
  const [settings, setSettings] = useState<Settings | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isNormalizing, setIsNormalizing] = useState(false)

  useEffect(() => {
    if (open) {
      fetchSettings()
      fetchUserProfile()
    }
  }, [open])

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings')
      const data = await response.json()
      setSettings(data)
    } catch (error) {
      console.error('설정 로드 실패:', error)
    }
  }

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/user-profile')
      const data = await response.json()
      setUserProfile(data)
    } catch (error) {
      console.error('프로필 로드 실패:', error)
    }
  }

  const saveSettings = async () => {
    if (!settings) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })

      if (response.ok) {
        alert('설정이 저장되었습니다!')
      } else {
        alert('설정 저장에 실패했습니다.')
      }
    } catch (error) {
      console.error('설정 저장 실패:', error)
      alert('설정 저장 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const saveUserProfile = async () => {
    if (!userProfile) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/user-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfile),
      })

      if (response.ok) {
        alert('프로필이 저장되었습니다!')
      } else {
        alert('프로필 저장에 실패했습니다.')
      }
    } catch (error) {
      console.error('프로필 저장 실패:', error)
      alert('프로필 저장 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  // 전화번호 정규화 함수
  const normalizePhones = async () => {
    setIsNormalizing(true)
    try {
      const response = await fetch('/api/business-cards/normalize-phones', {
        method: 'POST',
      })

      const result = await response.json()

      if (response.ok) {
        alert(
          `전화번호 정규화가 완료되었습니다!\n\n` +
          `📊 총 ${result.summary.total}개 명함 중\n` +
          `✅ ${result.summary.updated}개 업데이트\n` +
          `⏭️ ${result.summary.skipped}개 건너뛰기`
        )
      } else {
        alert(`전화번호 정규화에 실패했습니다: ${result.error}`)
      }
    } catch (error) {
      console.error('전화번호 정규화 실패:', error)
      alert('전화번호 정규화 중 오류가 발생했습니다.')
    } finally {
      setIsNormalizing(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>설정</DialogTitle>
          <DialogDescription>
            SMS 발송 설정과 사용자 프로필을 관리합니다.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="autosend" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="autosend">자동발송</TabsTrigger>
            <TabsTrigger value="profile">내 정보</TabsTrigger>
            <TabsTrigger value="tools">도구</TabsTrigger>
            <TabsTrigger value="help">도움말</TabsTrigger>
          </TabsList>

          {/* 자동발송 설정 */}
          <TabsContent value="autosend" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>자동발송 설정</CardTitle>
                <CardDescription>
                  명함 등록 시 자동으로 메시지를 발송할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings?.autoSendEnabled ?? false}
                    onCheckedChange={(checked) =>
                      setSettings(prev => prev ? { ...prev, autoSendEnabled: checked } : null)
                    }
                  />
                  <Label>자동발송 활성화</Label>
                </div>

                <div>
                  <Label htmlFor="default-sender">기본 발신번호</Label>
                  <Input
                    id="default-sender"
                    value={settings?.defaultSenderPhone ?? ''}
                    onChange={(e) =>
                      setSettings(prev => prev ? { ...prev, defaultSenderPhone: e.target.value } : null)
                    }
                    placeholder="010-1234-5678"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Solapi에서 인증받은 발신번호를 입력하세요
                  </p>
                </div>

                <div>
                  <Label htmlFor="auto-template">자동발송 템플릿</Label>
                  <Select
                    value={settings?.autoSendTemplateId ?? ''}
                    onValueChange={(value) =>
                      setSettings(prev => prev ? { ...prev, autoSendTemplateId: value } : null)
                    }
                  >
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

                <Button onClick={saveSettings} disabled={isLoading}>
                  {isLoading ? '저장 중...' : '설정 저장'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 내 정보 관리 */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>내 정보 관리</CardTitle>
                <CardDescription>
                  템플릿에서 사용할 내 정보를 설정합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="my-name">이름</Label>
                    <Input
                      id="my-name"
                      value={userProfile?.name ?? ''}
                      onChange={(e) =>
                        setUserProfile(prev => prev ? { ...prev, name: e.target.value } : null)
                      }
                      placeholder="김철수"
                    />
                  </div>
                  <div>
                    <Label htmlFor="my-title">직책</Label>
                    <Input
                      id="my-title"
                      value={userProfile?.title ?? ''}
                      onChange={(e) =>
                        setUserProfile(prev => prev ? { ...prev, title: e.target.value } : null)
                      }
                      placeholder="팀장"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="my-company">회사명</Label>
                  <Input
                    id="my-company"
                    value={userProfile?.companyName ?? ''}
                    onChange={(e) =>
                      setUserProfile(prev => prev ? { ...prev, companyName: e.target.value } : null)
                    }
                    placeholder="(주)테크컴퍼니"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="my-email">이메일</Label>
                    <Input
                      id="my-email"
                      value={userProfile?.email ?? ''}
                      onChange={(e) =>
                        setUserProfile(prev => prev ? { ...prev, email: e.target.value } : null)
                      }
                      placeholder="kim@company.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="my-phone">연락처</Label>
                    <Input
                      id="my-phone"
                      value={userProfile?.phone ?? ''}
                      onChange={(e) =>
                        setUserProfile(prev => prev ? { ...prev, phone: e.target.value } : null)
                      }
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="my-address">주소</Label>
                  <Textarea
                    id="my-address"
                    value={userProfile?.address ?? ''}
                    onChange={(e) =>
                      setUserProfile(prev => prev ? { ...prev, address: e.target.value } : null)
                    }
                    placeholder="서울시 강남구 테헤란로 123"
                    rows={2}
                  />
                </div>

                <Button onClick={saveUserProfile} disabled={isLoading}>
                  {isLoading ? '저장 중...' : '프로필 저장'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 도구 */}
          <TabsContent value="tools" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>유용한 도구</CardTitle>
                <CardDescription>
                  시스템 관리 및 데이터 정리 도구입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium">전화번호 정규화</h3>
                      <p className="text-sm text-gray-600">
                        기존 명함의 전화번호를 통일된 형식으로 변경합니다
                      </p>
                      <p className="text-xs text-gray-500">
                        예: 010.1234.5678 → 010-1234-5678
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={normalizePhones} 
                    disabled={isNormalizing}
                    variant="outline"
                  >
                    {isNormalizing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        처리 중...
                      </>
                    ) : (
                      '실행'
                    )}
                  </Button>
                </div>

                <Separator />

                <div className="text-sm text-gray-600">
                  <h4 className="font-medium mb-2">전화번호 정규화 지원 형식:</h4>
                  <ul className="space-y-1">
                    <li>• 010-1234-5678 (표준)</li>
                    <li>• 010.1234.5678 → 010-1234-5678</li>
                    <li>• 82)10-1234-5678 → 010-1234-5678</li>
                    <li>• 010 1234 5678 → 010-1234-5678</li>
                    <li>• 02-123-4567 (지역번호)</li>
                    <li>• 031-123-4567 (지역번호)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 도움말 */}
          <TabsContent value="help" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>템플릿 변수 사용법</CardTitle>
                <CardDescription>
                  메시지 템플릿에서 사용할 수 있는 변수들입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">사용 가능한 변수</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{이름}`}</code>
                      <p className="text-gray-600 mt-1">내 이름</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{회사}`}</code>
                      <p className="text-gray-600 mt-1">내 회사명</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{직책}`}</code>
                      <p className="text-gray-600 mt-1">내 직책</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{연락처}`}</code>
                      <p className="text-gray-600 mt-1">내 전화번호</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{이메일}`}</code>
                      <p className="text-gray-600 mt-1">내 이메일</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border">
                      <code className="font-semibold text-blue-600">{`{주소}`}</code>
                      <p className="text-gray-600 mt-1">내 주소</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">사용 예시</h4>
                  <div className="p-4 bg-blue-50 rounded border">
                    <p className="text-sm font-medium text-blue-800 mb-2">템플릿 예시:</p>
                    <div className="text-sm text-gray-700 font-mono bg-white p-2 rounded border">
                      <div>안녕하세요! &#123;이름&#125;입니다.</div>
                      <div>오늘 만나서 반가웠습니다.</div>
                      <div className="mt-2">&#123;회사&#125; &#123;직책&#125;</div>
                      <div>📧 &#123;이메일&#125;</div>
                      <div>📞 &#123;연락처&#125;</div>
                    </div>
                    <p className="text-sm text-blue-600 mt-2">↓ 실제 발송될 메시지</p>
                    <div className="text-sm text-gray-700 mt-1 p-2 bg-white rounded border">
                      <div>안녕하세요! 김철수입니다.</div>
                      <div>오늘 만나서 반가웠습니다.</div>
                      <div className="mt-2">(주)테크컴퍼니 팀장</div>
                      <div>📧 kim@company.com</div>
                      <div>📞 010-1234-5678</div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <h4 className="font-medium mb-2">SMS/LMS 자동 구분:</h4>
                  <ul className="space-y-1">
                    <li>• <strong>SMS</strong>: 90바이트 이하 (한글 약 45자)</li>
                    <li>• <strong>LMS</strong>: 91바이트 이상 (한글 약 46자 이상)</li>
                    <li>• 시스템이 메시지 길이에 따라 자동 선택</li>
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded border border-amber-200">
                  <h4 className="font-medium text-amber-800 mb-1">💡 중요:</h4>
                  <p className="text-sm text-amber-700">
                    변수를 사용하려면 <strong>설정 &gt; 내 정보</strong>에서 해당 정보를 먼저 입력해야 합니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
} 