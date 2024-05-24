'use client'
import { MasonryGrid } from '@/components/loaderImageGallery'
import PageLoader from '@/components/pageLoader'
import { useEffect, useState } from 'react'
import './styles.scss'

export default function AppStart({ setPageLoaded }: { setPageLoaded: any }) {
    const [counterComplete, setCounterComplete] = useState(false)
    const [fadeIn, setFadeIn] = useState(false)
    const [bgColor, setBgColor] = useState('bg-[#02457a]')
    const [gridClass, setGridClass] = useState('')

    function toggleDisplay() {
        const containers = document.querySelectorAll('.container-animated')

        containers.forEach((container) => {
            const isVisible = container.classList.contains('visible')

            if (isVisible) {
                container.setAttribute('fading-out', '')
                container.addEventListener(
                    'animationend',
                    () => {
                        container.classList.remove('visible')
                        container.removeAttribute('fading-out')
                    },
                    { once: true },
                )
                return
            }

            container.classList.add('visible')
        })
    }

    useEffect(() => {
        counterComplete && toggleDisplay()

        counterComplete &&
            setTimeout(() => {
                setFadeIn(true)

                setTimeout(() => {
                    setBgColor('bg-[#F2F1EB] min-h-screen')
                    setGridClass("hidden")
                }, 1500)

                setTimeout(() => {
                    setPageLoaded(true)
                }, 2900)

                setTimeout(() => {
                    setFadeIn(false)
                }, 3000)
            }, 5000)
    }, [counterComplete])

    useEffect(() => {
        if (fadeIn) {
            setTimeout(() => {
                setFadeIn(false)
            }, 3200)
        }
    }, [fadeIn])

    return (
        <main className={`page__style ${fadeIn ? 'animate_content fadeIn' : ''} ${bgColor}`}>

            <div className="container-animated visible">
                <PageLoader setCounterComplete={setCounterComplete} />
            </div>

            <div className={`container-animated ${gridClass}`}>{counterComplete && <MasonryGrid />}</div>
        </main>
    )
}
