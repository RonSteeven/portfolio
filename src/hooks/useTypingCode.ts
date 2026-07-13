import { useEffect, useRef } from 'react'

interface UseTypingCodeProps {
  code: string
  intervalTime?: number
  pauseTime?: number | null
}

export const useTypingCode = <T extends HTMLElement = HTMLElement>({
  code,
  intervalTime = 10,
  pauseTime = 2000,
}: UseTypingCodeProps) => {
  const codeRef = useRef<T>(null)

  useEffect(() => {
    const node = codeRef.current
    if (!node) return

    let currentIndex = 0
    let typingInterval: ReturnType<typeof setInterval>
    let restartTimeout: ReturnType<typeof setTimeout>

    const startTyping = (): void => {
      currentIndex = 0
      node.textContent = ''

      typingInterval = setInterval(() => {
        if (currentIndex < code.length) {
          node.textContent += code[currentIndex]
          currentIndex++
        } else {
          clearInterval(typingInterval)
          if (pauseTime !== null) {
            restartTimeout = setTimeout(startTyping, pauseTime)
          }
        }
      }, intervalTime)
    }

    startTyping()

    return () => {
      clearInterval(typingInterval)
      clearTimeout(restartTimeout)
    }
  }, [code, intervalTime, pauseTime])

  return [codeRef]
}
