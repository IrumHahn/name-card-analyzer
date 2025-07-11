'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MobileDebugPage() {
  const [debugData, setDebugData] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
  }

  const runTest = async (testName: string, testFn: () => Promise<any>) => {
    addLog(`🔍 ${testName} 테스트 시작...`)
    try {
      const result = await testFn()
      addLog(`✅ ${testName} 성공`)
      return { success: true, data: result }
    } catch (error) {
      addLog(`❌ ${testName} 실패: ${error instanceof Error ? error.message : String(error)}`)
      return { success: false, error: error instanceof Error ? error.message : String(error) }
    }
  }

  const runAllTests = async () => {
    setLoading(true)
    setLogs([])
    const results: any = {}

    // 1. API Health Check
    results.health = await runTest('API Health', async () => {
      const res = await fetch('/api/health')
      return res.json()
    })

    // 2. Debug Info
    results.debug = await runTest('Debug Info', async () => {
      const res = await fetch('/api/debug')
      return res.json()
    })

    // 3. Business Cards API
    results.businessCards = await runTest('Business Cards API', async () => {
      const res = await fetch('/api/business-cards')
      if (!res.ok) throw new Error(`Status: ${res.status}`)
      return res.json()
    })

    // 4. Templates API
    results.templates = await runTest('Templates API', async () => {
      const res = await fetch('/api/message-templates')
      if (!res.ok) throw new Error(`Status: ${res.status}`)
      return res.json()
    })

    // 5. Settings API
    results.settings = await runTest('Settings API', async () => {
      const res = await fetch('/api/settings')
      if (!res.ok) throw new Error(`Status: ${res.status}`)
      return res.json()
    })

    // 6. User Profile API
    results.userProfile = await runTest('User Profile API', async () => {
      const res = await fetch('/api/user-profile')
      if (!res.ok) throw new Error(`Status: ${res.status}`)
      return res.json()
    })

    // 7. Browser Info
    results.browser = {
      userAgent: navigator.userAgent,
      online: navigator.onLine,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      hardwareConcurrency: navigator.hardwareConcurrency,
      maxTouchPoints: navigator.maxTouchPoints,
    }

    // 8. Camera Test
    results.camera = await runTest('Camera Access', async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
      return { available: true, trackCount: tracks.length }
    })

    setDebugData(results)
    setLoading(false)
    addLog('🎉 모든 테스트 완료!')
  }

  useEffect(() => {
    runAllTests()
  }, [])

  return (
    <div className="container mx-auto p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">📱 모바일 디버그</h1>
      
      <Button 
        onClick={runAllTests} 
        disabled={loading}
        className="w-full mb-4"
      >
        {loading ? '🔄 테스트 중...' : '🔍 전체 테스트 다시 실행'}
      </Button>

      {/* 실시간 로그 */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>📋 실시간 로그</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black text-green-400 p-3 rounded text-xs font-mono max-h-40 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Health Check 결과 */}
      {debugData.health && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${
                debugData.health.success ? 'bg-green-500' : 'bg-red-500'
              }`} />
              Health Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            {debugData.health.success ? (
              <pre className="text-xs overflow-auto bg-gray-50 p-2 rounded">
                {JSON.stringify(debugData.health.data, null, 2)}
              </pre>
            ) : (
              <div className="text-red-600">{debugData.health.error}</div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 환경 변수 체크 */}
      {debugData.debug && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>🔧 환경 변수</CardTitle>
          </CardHeader>
          <CardContent>
            {debugData.debug.success ? (
              <pre className="text-xs overflow-auto bg-gray-50 p-2 rounded">
                {JSON.stringify(debugData.debug.data, null, 2)}
              </pre>
            ) : (
              <div className="text-red-600">{debugData.debug.error}</div>
            )}
          </CardContent>
        </Card>
      )}

      {/* API 상태 */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>🌐 API 상태</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(debugData).map(([key, value]: [string, any]) => {
              if (['businessCards', 'templates', 'settings', 'userProfile'].includes(key)) {
                return (
                  <div key={key} className="flex justify-between">
                    <span>{key}:</span>
                    <span className={value.success ? 'text-green-600' : 'text-red-600'}>
                      {value.success ? '✅ 정상' : `❌ 실패: ${value.error}`}
                    </span>
                  </div>
                )
              }
              return null
            })}
          </div>
        </CardContent>
      </Card>

      {/* 브라우저 정보 */}
      {debugData.browser && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>🌐 브라우저 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs overflow-auto bg-gray-50 p-2 rounded">
              {JSON.stringify(debugData.browser, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}

      {/* 카메라 접근 */}
      {debugData.camera && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>📷 카메라 접근</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={debugData.camera.success ? 'text-green-600' : 'text-red-600'}>
              {debugData.camera.success ? '✅ 카메라 접근 가능' : `❌ 실패: ${debugData.camera.error}`}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 빠른 해결책 */}
      <Card>
        <CardHeader>
          <CardTitle>💡 빠른 해결책</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div>1. 시크릿 모드로 다시 시도</div>
            <div>2. 브라우저 캐시 삭제</div>
            <div>3. 다른 브라우저 사용</div>
            <div>4. WiFi/모바일 데이터 전환</div>
            <div>5. 홈 화면에 추가하여 PWA로 실행</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 