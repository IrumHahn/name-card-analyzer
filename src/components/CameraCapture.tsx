'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Camera, RotateCcw, Check, X, Upload, Settings } from 'lucide-react'

interface CameraCaptureProps {
  onCapture: (imageBlob: Blob) => void
  onCancel: () => void
  debug?: boolean // 디버그 모드 추가
}

export default function CameraCapture({ onCapture, onCancel, debug = false }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const prevFacingModeRef = useRef<'user' | 'environment'>('environment')
  
  const [isStreaming, setIsStreaming] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const [isInitialized, setIsInitialized] = useState(false)
  const [cameraAvailable, setCameraAvailable] = useState(false)
  const [showFileUpload, setShowFileUpload] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [showDebug, setShowDebug] = useState(debug)
  
  // 카메라 장치 관련 상태
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([])
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null)
  const [showDeviceSelection, setShowDeviceSelection] = useState(false)

  // 디버그 로그 추가 함수
  const addDebugLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const logMessage = `[${timestamp}] ${message}`
    console.log(logMessage)
    
    setDebugInfo(prev => [...prev.slice(-9), logMessage]) // 최근 10개만 유지
  }, [])

  // 비디오 장치 목록 가져오기
  const getVideoDevices = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter(device => device.kind === 'videoinput')
      
      addDebugLog(`📹 발견된 비디오 장치: ${videoDevices.length}개`)
      videoDevices.forEach((device, index) => {
        addDebugLog(`  ${index + 1}. ${device.label || `Camera ${index + 1}`} (ID: ${device.deviceId.substring(0, 8)}...)`)
      })
      
      setVideoDevices(videoDevices)
      
      // 맥북 내장 카메라 자동 선택 로직
      if (videoDevices.length > 0 && !selectedDeviceId) {
        // 'FaceTime' 또는 'Built-in' 키워드가 포함된 카메라를 우선 선택
        const builtInCamera = videoDevices.find(device => 
          device.label.toLowerCase().includes('facetime') || 
          device.label.toLowerCase().includes('built-in') ||
          device.label.toLowerCase().includes('내장')
        )
        
        if (builtInCamera) {
          addDebugLog(`✅ 맥북 내장 카메라 자동 선택: ${builtInCamera.label}`)
          setSelectedDeviceId(builtInCamera.deviceId)
        } else {
          // 내장 카메라를 찾지 못한 경우 첫 번째 장치 선택
          addDebugLog(`⚠️ 내장 카메라 미발견, 첫 번째 장치 선택: ${videoDevices[0].label}`)
          setSelectedDeviceId(videoDevices[0].deviceId)
        }
      }
      
      return videoDevices
    } catch (error) {
      addDebugLog(`❌ 비디오 장치 목록 가져오기 실패: ${error instanceof Error ? error.message : String(error)}`)
      return []
    }
  }, [addDebugLog, selectedDeviceId])

  // 클라이언트 사이드 렌더링 보장 (Hydration 문제 해결)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 클라이언트에서만 카메라 상태 확인
  useEffect(() => {
    if (!isClient) return

    const checkCameraSupport = async () => {
      try {
        const hasGetUserMedia = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
        const isSecure = window.isSecureContext || location.protocol === 'https:' || location.hostname === 'localhost'
        
        const envInfo = {
          hasGetUserMedia,
          isSecure,
          protocol: location.protocol,
          hostname: location.hostname,
          userAgent: navigator.userAgent
        }
        
        addDebugLog(`🔍 카메라 환경 확인: ${JSON.stringify(envInfo)}`)

        if (!hasGetUserMedia || !isSecure) {
          addDebugLog('❌ 카메라 접근 불가능 - 파일 업로드 모드로 전환')
          setCameraAvailable(false)
          setShowFileUpload(true)
          setError('카메라 기능을 사용하려면 HTTPS 연결이 필요합니다. 파일 업로드를 사용해주세요.')
          setIsInitialized(true)
          return
        }

        // 카메라 접근 권한 확인
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
          })
          stream.getTracks().forEach(track => track.stop()) // 즉시 중지
          
          // 비디오 장치 목록 가져오기
          await getVideoDevices()
          
          addDebugLog('✅ 카메라 사용 가능')
          setCameraAvailable(true)
          setIsInitialized(true)
        } catch (err) {
          addDebugLog(`❌ 카메라 권한 없음: ${err instanceof Error ? err.message : String(err)}`)
          setCameraAvailable(false)
          setShowFileUpload(true)
          setError('카메라 권한이 필요합니다. 파일 업로드를 사용해주세요.')
          setIsInitialized(true)
        }
      } catch (err) {
        addDebugLog(`카메라 상태 확인 실패: ${err instanceof Error ? err.message : String(err)}`)
        setCameraAvailable(false)
        setShowFileUpload(true)
        setError('카메라 상태를 확인할 수 없습니다. 파일 업로드를 사용해주세요.')
        setIsInitialized(true)
      }
    }

    checkCameraSupport()
  }, [isClient, addDebugLog, getVideoDevices])

  // facingMode 변경 시에만 카메라 재시작 (무한 루프 방지)
  useEffect(() => {
    // 이전 facingMode와 현재 facingMode가 다를 때만 재시작
    if (prevFacingModeRef.current !== facingMode && isStreaming) {
      addDebugLog(`🔄 카메라 모드 변경: ${prevFacingModeRef.current} → ${facingMode}`)
      
      // 이전 값 업데이트
      prevFacingModeRef.current = facingMode
      
      // 카메라 재시작
      stopCamera()
      setTimeout(() => {
        startCamera()
      }, 100)
    } else {
      // 첫 번째 렌더링에서는 이전 값만 업데이트
      prevFacingModeRef.current = facingMode
    }
  }, [facingMode]) // isStreaming 의존성 제거

  // 선택된 장치 변경 시 카메라 재시작
  useEffect(() => {
    if (selectedDeviceId && isStreaming) {
      addDebugLog(`🔄 카메라 장치 변경: ${selectedDeviceId.substring(0, 8)}...`)
      stopCamera()
      setTimeout(() => {
        startCamera()
      }, 100)
    }
  }, [selectedDeviceId])

  const startCamera = useCallback(async () => {
    if (!cameraAvailable) {
      addDebugLog('카메라 사용 불가능 상태')
      setError('카메라 접근이 불가능합니다. 파일 업로드를 사용해주세요.')
      setShowFileUpload(true)
      return
    }

    try {
      addDebugLog('📹 카메라 시작 시도...')
      setError(null)
      
      // 먼저 스트리밍 상태를 true로 설정하여 비디오 요소가 렌더링되도록 함
      setIsStreaming(true)
      setShowFileUpload(false)
      
      // 비디오 요소가 DOM에 마운트될 때까지 기다리기
      const waitForVideoElement = async (): Promise<HTMLVideoElement> => {
        return new Promise((resolve, reject) => {
          let attempts = 0
          const maxAttempts = 50 // 5초 (100ms * 50)
          
          const checkElement = () => {
            attempts++
            if (videoRef.current) {
              addDebugLog(`✅ 비디오 요소 찾음 (시도 횟수: ${attempts})`)
              resolve(videoRef.current)
            } else if (attempts >= maxAttempts) {
              addDebugLog(`❌ 비디오 요소 마운팅 타임아웃 (시도 횟수: ${attempts})`)
              reject(new Error('Video element mounting timeout'))
            } else {
              addDebugLog(`⏳ 비디오 요소 대기 중... (시도 횟수: ${attempts})`)
              setTimeout(checkElement, 100)
            }
          }
          
          checkElement()
        })
      }

      // 기존 스트림 정리
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }

      // 카메라 제약조건 설정
      const baseVideoConstraints: MediaTrackConstraints = {
        width: { ideal: 1920, max: 1920 },
        height: { ideal: 1080, max: 1080 }
      }

      // 특정 장치 선택 또는 facingMode 사용
      let videoConstraints: MediaTrackConstraints
      if (selectedDeviceId) {
        videoConstraints = {
          ...baseVideoConstraints,
          deviceId: { exact: selectedDeviceId }
        }
        addDebugLog(`📹 특정 장치 선택: ${selectedDeviceId.substring(0, 8)}...`)
      } else {
        videoConstraints = {
          ...baseVideoConstraints,
          facingMode: facingMode
        }
        addDebugLog(`📹 facingMode 사용: ${facingMode}`)
      }

      const constraints: MediaStreamConstraints = {
        video: videoConstraints
      }

      addDebugLog(`🎥 카메라 제약사항: ${JSON.stringify(constraints)}`)

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      addDebugLog(`✅ 카메라 스트림 획득 성공 {videoTracks: ${stream.getVideoTracks().length}, audioTracks: ${stream.getAudioTracks().length}, active: ${stream.active}}`)

      // 비디오 트랙 상태 확인
      const videoTrack = stream.getVideoTracks()[0]
      if (videoTrack) {
        const settings = videoTrack.getSettings()
        addDebugLog(`📼 비디오 트랙 상태: ${JSON.stringify({
          enabled: videoTrack.enabled,
          muted: videoTrack.muted,
          readyState: videoTrack.readyState,
          label: videoTrack.label,
          deviceId: settings.deviceId?.substring(0, 8) + '...'
        })}`)
      }

      streamRef.current = stream
      
      // 비디오 요소가 마운트될 때까지 기다리기
      const videoElement = await waitForVideoElement()
      
      addDebugLog('📺 비디오 요소에 스트림 할당 중...')
      videoElement.srcObject = stream
      
      // 비디오 로드 대기
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Video loading timeout'))
        }, 10000) // 10초 타임아웃
        
        videoElement.onloadedmetadata = () => {
          clearTimeout(timeout)
          addDebugLog('📺 비디오 메타데이터 로드 완료')
          resolve()
        }
        videoElement.onerror = (e) => {
          clearTimeout(timeout)
          addDebugLog(`❌ 비디오 로드 에러: ${e instanceof Error ? e.message : String(e)}`)
          reject(e)
        }
      })

      // 비디오 재생 시도
      try {
        addDebugLog('▶️ 비디오 재생 시도...')
        await videoElement.play()
        addDebugLog('✅ 비디오 재생 시작 완료')
        // 이미 위에서 setIsStreaming(true)를 했으므로 여기서는 생략
      } catch (playError) {
        addDebugLog(`❌ 비디오 재생 실패: ${playError instanceof Error ? playError.message : String(playError)}`)
        // 재생 실패 시 사용자 상호작용 필요 메시지
        setError('비디오 재생을 위해 화면을 터치해주세요.')
        
        // 클라이언트 사이드에서만 document 접근
        if (typeof document !== 'undefined') {
          // 사용자가 화면을 터치하면 재생 시도
          const handleUserInteraction = async () => {
            try {
              if (videoRef.current) {
                await videoRef.current.play()
                setError(null)
                document.removeEventListener('touchstart', handleUserInteraction)
                document.removeEventListener('click', handleUserInteraction)
              }
            } catch (e) {
              addDebugLog(`사용자 상호작용 후 재생 실패: ${e instanceof Error ? e.message : String(e)}`)
              setError('카메라 재생에 실패했습니다. 파일 업로드를 사용해주세요.')
              setIsStreaming(false)
              setShowFileUpload(true)
            }
          }
          
          document.addEventListener('touchstart', handleUserInteraction, { once: true })
          document.addEventListener('click', handleUserInteraction, { once: true })
        }
      }
    } catch (err) {
      const errorDetails = {
        name: err instanceof Error ? err.name : 'Unknown',
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack?.split('\n').slice(0, 3).join('\n') : 'No stack'
      }
      
      addDebugLog(`❌ 카메라 접근 실패: ${JSON.stringify(errorDetails)}`)
      
      // 에러 발생 시 스트리밍 상태 되돌리기
      setIsStreaming(false)
      
      let errorMessage = '카메라에 접근할 수 없습니다.'
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError') {
          errorMessage = '카메라 권한이 거부되었습니다. 브라우저 설정에서 카메라 권한을 허용해주세요.'
        } else if (err.name === 'NotFoundError') {
          errorMessage = '선택한 카메라를 찾을 수 없습니다. 다른 카메라를 선택해주세요.'
        } else if (err.name === 'NotReadableError') {
          errorMessage = '카메라에 접근할 수 없습니다. 다른 앱에서 카메라를 사용 중일 수 있습니다.'
        } else if (err.name === 'OverconstrainedError') {
          errorMessage = '선택한 카메라가 요청한 설정을 지원하지 않습니다. 다른 카메라를 시도해보세요.'
        } else if (err.message.includes('Video element')) {
          errorMessage = '카메라 화면을 준비하는 중 오류가 발생했습니다. 다시 시도해주세요.'
        } else {
          errorMessage = `카메라 오류: ${err.message}`
        }
      }
      
      setError(errorMessage)
      setShowFileUpload(true)
    }
  }, [facingMode, selectedDeviceId, cameraAvailable, addDebugLog])

  const stopCamera = useCallback(() => {
    addDebugLog('🛑 카메라 중지')
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    setIsStreaming(false)
  }, [addDebugLog])

  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) {
      console.error('비디오 또는 캔버스 요소가 없습니다')
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context) {
      console.error('캔버스 컨텍스트를 가져올 수 없습니다')
      return
    }

    addDebugLog('📸 사진 촬영 중...')

    // 캔버스 크기를 비디오 크기에 맞게 설정
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // 비디오 프레임을 캔버스에 그리기
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // 캔버스를 이미지 데이터로 변환
    const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8)
    setCapturedImage(imageDataUrl)
    
    addDebugLog('✅ 사진 촬영 완료')
    
    // 카메라 스트림 정지
    stopCamera()
  }, [stopCamera, addDebugLog])

  const confirmCapture = useCallback(() => {
    if (!capturedImage || !canvasRef.current) return

    canvasRef.current.toBlob((blob) => {
      if (blob) {
        addDebugLog('📤 이미지 전송 중...')
        onCapture(blob)
      }
    }, 'image/jpeg', 0.8)
  }, [capturedImage, onCapture, addDebugLog])

  const retakePhoto = useCallback(() => {
    addDebugLog('🔄 다시 촬영')
    setCapturedImage(null)
    setShowDeviceSelection(false)
    startCamera()
  }, [startCamera, addDebugLog])

  const switchCamera = useCallback(() => {
    addDebugLog('🔄 카메라 전환')
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user')
  }, [addDebugLog])

  // 파일 업로드 처리
  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      addDebugLog(`📁 파일 선택: ${file.name}`)
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setCapturedImage(e.target.result as string)
          setShowFileUpload(false)
        }
      }
      reader.readAsDataURL(file)
    }
  }, [addDebugLog])

  // 파일 업로드 확인
  const confirmFileUpload = useCallback(() => {
    const file = fileInputRef.current?.files?.[0]
    if (file) {
      addDebugLog(`📤 파일 업로드 중: ${file.name}`)
      onCapture(file)
    }
  }, [onCapture, addDebugLog])

  // 컴포넌트 언마운트 시 카메라 정리
  const handleCancel = useCallback(() => {
    stopCamera()
    onCancel()
  }, [stopCamera, onCancel])

  // 파일 업로드 클릭
  const handleFileUploadClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  // 클라이언트 사이드 렌더링 확인 전에는 로딩 표시
  if (!isClient) {
    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        <div className="w-full max-w-md h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">카메라 준비 중...</p>
          </div>
        </div>
      </div>
    )
  }

  // 초기화 전에는 로딩 표시
  if (!isInitialized) {
    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        <div className="w-full max-w-md h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">카메라 상태 확인 중...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* 디버그 정보 표시 */}
      {showDebug && debugInfo.length > 0 && (
        <div className="w-full max-w-md bg-black text-green-400 text-xs p-3 rounded-lg overflow-auto max-h-32 font-mono">
          <div className="font-bold mb-1">디버그 로그:</div>
          {debugInfo.map((log, index) => (
            <div key={index} className="break-words">{log}</div>
          ))}
        </div>
      )}
      
      <div className="relative w-full max-w-md">
        {/* 비디오 스트림 */}
        {isStreaming && !capturedImage && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-auto rounded-lg border-2 border-gray-300"
          />
        )}

        {/* 캡처된 이미지 */}
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-auto rounded-lg border-2 border-gray-300"
          />
        )}

        {/* 에러 메시지 */}
        {error && (
          <div className="w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* 파일 업로드 UI */}
        {showFileUpload && !capturedImage && (
          <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
            <Upload className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-600 text-center mb-4">
              명함 사진을 선택하세요
            </p>
            <Button onClick={handleFileUploadClick} variant="outline">
              파일 선택
            </Button>
          </div>
        )}

        {/* 카메라 시작 전 상태 */}
        {!isStreaming && !capturedImage && !error && !showFileUpload && cameraAvailable && (
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>

      {/* 숨겨진 파일 입력 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* 숨겨진 캔버스 */}
      <canvas ref={canvasRef} className="hidden" />

      {/* 카메라 장치 선택 */}
      {cameraAvailable && videoDevices.length > 1 && !capturedImage && (showDeviceSelection || !isStreaming) && (
        <div className="w-full max-w-md space-y-2">
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">카메라 선택</span>
            {isStreaming && (
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                스트리밍 중
              </span>
            )}
          </div>
          <Select value={selectedDeviceId || ''} onValueChange={setSelectedDeviceId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="카메라를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {videoDevices.map((device) => (
                <SelectItem key={device.deviceId} value={device.deviceId}>
                  {device.label || `Camera ${videoDevices.indexOf(device) + 1}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedDeviceId && (
            <div className="text-xs text-gray-500">
              현재 선택: {videoDevices.find(d => d.deviceId === selectedDeviceId)?.label || '알 수 없음'}
            </div>
          )}
        </div>
      )}

      {/* 컨트롤 버튼들 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {!isStreaming && !capturedImage && !showFileUpload && cameraAvailable && (
          <>
            <Button onClick={startCamera} className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>카메라 시작</span>
            </Button>
            {videoDevices.length > 1 && (
              <Button 
                onClick={() => setShowDeviceSelection(!showDeviceSelection)} 
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>설정</span>
              </Button>
            )}
            <Button onClick={handleCancel} variant="outline">
              <X className="w-4 h-4 mr-2" />
              취소
            </Button>
          </>
        )}

        {showFileUpload && !capturedImage && (
          <>
            <Button onClick={handleFileUploadClick} className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>파일 선택</span>
            </Button>
            {cameraAvailable && (
              <Button onClick={() => {
                setShowFileUpload(false)
                setError(null)
                startCamera()
              }} variant="outline" className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>카메라 시도</span>
              </Button>
            )}
            <Button onClick={handleCancel} variant="outline">
              <X className="w-4 h-4 mr-2" />
              취소
            </Button>
          </>
        )}

        {isStreaming && !capturedImage && (
          <>
            <Button onClick={capturePhoto} size="lg" className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>촬영</span>
            </Button>
            {videoDevices.length > 1 ? (
              <Button 
                onClick={() => setShowDeviceSelection(!showDeviceSelection)} 
                variant="outline" 
                size="lg"
                className="flex items-center space-x-2"
              >
                <Settings className="w-5 h-5" />
                <span>카메라 변경</span>
              </Button>
            ) : (
              <Button onClick={switchCamera} variant="outline" size="lg">
                <RotateCcw className="w-5 h-5" />
              </Button>
            )}
            <Button onClick={handleCancel} variant="outline" size="lg">
              <X className="w-5 h-5" />
            </Button>
          </>
        )}

        {capturedImage && (
          <>
            <Button onClick={showFileUpload ? confirmFileUpload : confirmCapture} size="lg" className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>사용하기</span>
            </Button>
            <Button onClick={showFileUpload ? handleFileUploadClick : retakePhoto} variant="outline" size="lg">
              <RotateCcw className="w-5 h-5" />
              <span>{showFileUpload ? '다른 파일 선택' : '다시 촬영'}</span>
            </Button>
            <Button onClick={handleCancel} variant="outline" size="lg">
              <X className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>

      {/* 사용 안내 */}
      <div className="text-sm text-gray-500 text-center max-w-md">
        {!isInitialized && (
          <p>카메라 상태를 확인하고 있습니다...</p>
        )}
        {isInitialized && !isStreaming && !capturedImage && !showFileUpload && cameraAvailable && (
          <p>카메라 권한을 허용하고 명함을 촬영하세요.</p>
        )}
        {showFileUpload && !capturedImage && (
          <p>갤러리에서 명함 사진을 선택하거나 카메라로 촬영하세요.</p>
        )}
        {isStreaming && !capturedImage && (
          <p>명함을 화면에 맞춰 촬영하세요.</p>
        )}
        {capturedImage && (
          <p>사진이 선명한지 확인하고 사용하세요.</p>
        )}
      </div>

      {/* 디버그 토글 버튼 (에러 발생 시에만 표시) */}
      {error && (
        <div className="w-full max-w-md space-y-2">
          <Button 
            onClick={() => setShowDebug(!showDebug)} 
            variant="outline" 
            size="sm" 
            className="w-full"
          >
            {showDebug ? '디버그 로그 숨기기' : '상세 로그 확인'}
          </Button>
          {showDebug && (
            <Button 
              onClick={() => setDebugInfo([])} 
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              로그 지우기
            </Button>
          )}
        </div>
      )}
    </div>
  )
} 