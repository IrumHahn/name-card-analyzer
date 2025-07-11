'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface MessageTemplate {
  id: string
  name: string
  content: string
  createdAt: string
}

interface TemplateManagementDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  templates: MessageTemplate[]
  onRefreshTemplates: () => void
}

export default function TemplateManagementDialog({ open, onOpenChange, templates, onRefreshTemplates }: TemplateManagementDialogProps) {
  const [newTemplate, setNewTemplate] = useState({ name: '', content: '' })
  const [editingTemplate, setEditingTemplate] = useState<MessageTemplate | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // 템플릿 생성
  const createTemplate = async () => {
    if (!newTemplate.name || !newTemplate.content) {
      alert('템플릿 이름과 내용을 입력해주세요.')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/message-templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTemplate),
      })

      if (response.ok) {
        onRefreshTemplates()
        setNewTemplate({ name: '', content: '' })
        alert('템플릿이 생성되었습니다!')
      } else {
        alert('템플릿 생성에 실패했습니다.')
      }
    } catch (error) {
      console.error('템플릿 생성 실패:', error)
      alert('템플릿 생성 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  // 템플릿 수정
  const updateTemplate = async () => {
    if (!editingTemplate || !editingTemplate.name || !editingTemplate.content) {
      alert('템플릿 이름과 내용을 입력해주세요.')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/message-templates/${editingTemplate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editingTemplate.name,
          content: editingTemplate.content,
        }),
      })

      if (response.ok) {
        onRefreshTemplates()
        setEditingTemplate(null)
        alert('템플릿이 수정되었습니다!')
      } else {
        alert('템플릿 수정에 실패했습니다.')
      }
    } catch (error) {
      console.error('템플릿 수정 실패:', error)
      alert('템플릿 수정 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  // 템플릿 삭제
  const deleteTemplate = async (templateId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/message-templates/${templateId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        onRefreshTemplates()
        alert('템플릿이 삭제되었습니다!')
      } else {
        alert('템플릿 삭제에 실패했습니다.')
      }
    } catch (error) {
      console.error('템플릿 삭제 실패:', error)
      alert('템플릿 삭제 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>메시지 템플릿 관리</DialogTitle>
          <DialogDescription>
            문자 발송에 사용할 템플릿을 생성, 수정, 삭제할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 새 템플릿 생성 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                새 템플릿 추가
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="new-template-name">템플릿 이름</Label>
                <Input
                  id="new-template-name"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                  placeholder="예: 인사 메시지"
                />
              </div>
              <div>
                <Label htmlFor="new-template-content">템플릿 내용</Label>
                <Textarea
                  id="new-template-content"
                  value={newTemplate.content}
                  onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                  placeholder="메시지 내용을 입력하세요..."
                  rows={4}
                />
              </div>
              <Button onClick={createTemplate} disabled={isLoading} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                {isLoading ? '생성 중...' : '템플릿 추가'}
              </Button>
            </CardContent>
          </Card>

          {/* 기존 템플릿 목록 */}
          <Card>
            <CardHeader>
              <CardTitle>템플릿 목록 ({templates.length}개)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {templates.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">등록된 템플릿이 없습니다.</p>
                ) : (
                  templates.map((template) => (
                    <div key={template.id} className="border rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{template.name}</h4>
                        <div className="flex gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingTemplate(template)}
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>템플릿 삭제</AlertDialogTitle>
                                <AlertDialogDescription>
                                  "{template.name}" 템플릿을 삭제하시겠습니까?
                                  이 작업은 되돌릴 수 없습니다.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>취소</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteTemplate(template.id)}>
                                  삭제
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{template.content}</p>
                      <p className="text-xs text-gray-400">
                        생성일: {new Date(template.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 템플릿 수정 다이얼로그 */}
        {editingTemplate && (
          <Dialog open={!!editingTemplate} onOpenChange={() => setEditingTemplate(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>템플릿 수정</DialogTitle>
                <DialogDescription>
                  선택한 템플릿의 내용을 수정합니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-template-name">템플릿 이름</Label>
                  <Input
                    id="edit-template-name"
                    value={editingTemplate.name}
                    onChange={(e) => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-template-content">템플릿 내용</Label>
                  <Textarea
                    id="edit-template-content"
                    value={editingTemplate.content}
                    onChange={(e) => setEditingTemplate({ ...editingTemplate, content: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={updateTemplate} disabled={isLoading} className="flex-1">
                    {isLoading ? '수정 중...' : '수정 완료'}
                  </Button>
                  <Button variant="outline" onClick={() => setEditingTemplate(null)} className="flex-1">
                    취소
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  )
} 