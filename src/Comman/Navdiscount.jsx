import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function Navdiscount() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-black text-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="hidden sm:inline text-lg font-semibold mr-2">🎉</span>
          <p className="font-medium text-sm sm:text-base">
            Special offer! Get 20% off your purchase.
          </p>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:block mr-4">
            <span className="text-sm font-medium">Ends in: </span>
            <span className="text-yellow-400 font-bold">{formatTime(timeLeft)}</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

