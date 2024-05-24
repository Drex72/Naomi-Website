import 'animate.css'
import { createElement, useEffect, useState } from 'react'
import {
    ChapterOutro,
    CharacterEight,
    CharacterFive,
    CharacterFour,
    CharacterIntro,
    CharacterNine,
    CharacterOne,
    CharacterSeven,
    CharacterSix,
    CharacterTen,
    CharacterThree,
    CharacterTwo,
    GoodBye,
    Greetings,
    Introduction,
} from '../components/pages'
import { flowersBase64 } from '../data/flower'
import { Navigations } from './Navigator'

export const HomeLayout = () => {
    const COMPONENTS: (() => JSX.Element)[] = [
        Introduction,
        Greetings,
        CharacterIntro,
        CharacterOne,
        CharacterTwo,
        CharacterThree,
        CharacterFour,
        CharacterFive,
        CharacterSix,
        CharacterSeven,
        CharacterEight,
        CharacterNine,
        CharacterTen,
        ChapterOutro,
        GoodBye,
    ]

    const [pageIndex, setPageIndex] = useState(0)

    const moveForward = () => {
        if (pageIndex + 1 < COMPONENTS.length) {
            setPageIndex(pageIndex + 1)
        }
    }

    const moveBackward = () => {
        if (pageIndex !== 0) {
            setPageIndex(pageIndex - 1)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pageIndex])

    const [audioPlaying, setAudioPlaying] = useState(false)

    let sounds = [
        'https://firebasestorage.googleapis.com/v0/b/anu-is-savage.appspot.com/o/Images%2Fy2mate.com%20-%20Sody%20%20Reason%20To%20Stay%20Live.mp3?alt=media&token=c2f9f155-c52b-4068-a36b-8f5f28000f61',
        'https://firebasestorage.googleapis.com/v0/b/anu-is-savage.appspot.com/o/Images%2Fy2mate.com%20-%20Jason%20WalkerEcho.mp3?alt=media&token=2a79cf20-bcaa-47ed-8ee3-40967c9f9304',
    ]

    const playNextSounds = (sounds: string[]) => {
        if (sounds.length > 0) {
            const audio = new Audio()
            const currentSound = sounds[0]
            audio.src = currentSound
            audio.currentTime = 0
            audio.play()
            sounds.shift()
            sounds.push(currentSound)

            audio.addEventListener('ended', function () {
                return playNextSounds(sounds)
            })
        }

        setTimeout(() => {
            setAudioPlaying(true)
        }, 2700)
    }

    const playSound = () => {
        var button = document.getElementById('close_btn')

        button!.click()
    }

    // useEffect(() => {
    //     playNextSounds(sounds)
    // }, [])

    useEffect(() => {
        var button = document.getElementById('close_btn')

        button?.addEventListener("click",  () => {
            console.log("hello")
            playNextSounds(sounds)
        })

        button!.click()

    
    }, [])

    return (
        <div className="py-10 px-5 bg-[#F2F1EB] min-h-screen text-[#3e3e3e]">
            <div className="p-[5%] md:p-12 w-[95%] md:w-[80%] mx-auto shadow-lg relative rounded-lg h-[700px] ">
                <div className="border h-full w-full border-[#AFC8AD] rounded-lg text-center  home_layout overflow-y-scroll">
                    <img
                        style={{ transform: 'rotate(-30deg)' }}
                        className="absolute -top-[70px] md:-top-[110px] -right-[30px] md:-right-[70px] h-40 md:h-96 "
                        src={flowersBase64}
                        alt="Top"
                    />
                    <img
                        style={{ transform: 'rotate(-212deg)' }}
                        className="absolute -bottom-[75px] md:-bottom-[115px] -left-[30px] md:-left-[70px] h-40 md:h-96 "
                        src={flowersBase64}
                        alt="Bottom"
                    />

                    <div className="md:p-16 py-10 px-5 flex items-center justify-center h-full">{createElement(COMPONENTS[pageIndex])}</div>
                </div>

                <Navigations currentStep={pageIndex + 1} totalSteps={COMPONENTS.length} moveBackward={moveBackward} moveForward={moveForward} />

                <button id="close_btn" className="hidden close_btn">
                    Click
                </button>
            </div>
        </div>
    )
}
