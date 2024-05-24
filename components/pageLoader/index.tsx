import { useEffect, useState } from 'react'

import { Style_Script } from 'next/font/google'

const font = Style_Script({ weight: '400', subsets: ['latin'] })

const PageLoader = ({ setCounterComplete }: { setCounterComplete: any }) => {
    const [number, setNumber] = useState('0000')

    const [isAnimating, setIsAnimating] = useState(true)

    const startAnimation = () => {
        setIsAnimating(true)
        let start = 0
        let endFast = 2006
        let endSlow = 2024
        let durationFast = 2000 // 2 seconds for fast animation
        let durationSlow = 5000 // 5 seconds for slow animation
        let totalDuration = durationFast + durationSlow
        let startTime = Date.now()

        const animate = () => {
            let currentTime = Date.now()
            let elapsedTime = currentTime - startTime

            if (elapsedTime < durationFast) {
                // Fast animation
                let progress = elapsedTime / durationFast
                setNumber(formatNumber(Math.floor(progress * endFast)))
            } else if (elapsedTime < totalDuration) {
                // Smooth transition
                let slowElapsedTime = elapsedTime - durationFast
                let smoothProgress = (slowElapsedTime / durationSlow) ** 0.5 // Using a square root function for easing
                setNumber(formatNumber(Math.floor(endFast + smoothProgress * (endSlow - endFast))))
            } else {
                // End of animation
                setNumber(formatNumber(endSlow))
                setIsAnimating(false)
                clearInterval(animationInterval)
                setCounterComplete(true)
            }
        }

        const animationInterval = setInterval(animate, 16) // Roughly 60 FPS

        return () => clearInterval(animationInterval)
    }

    useEffect(() => {
        if (isAnimating) {
            startAnimation()
        }


    }, [isAnimating])

    const formatNumber = (num: number) => {
        return num.toString().padStart(4, '0')
    }

    return (
        <div>
            <div className={`flex min-h-screen flex-col items-center justify-center  md:p-24 ${font.className}`}>
                <p className="text-[5rem] md:text-[7rem] font-semibold tracking-[3.5rem] ">{number.toString().padStart(4, '0')}</p>
            </div>
        </div>
    )
}

export default PageLoader
