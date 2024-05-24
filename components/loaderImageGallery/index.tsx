"use client"

import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './file.scss'

type TransitionEffectType = {
    name: string
    children: React.ReactNode
    [key: string]: any
}

const TransitionEffect = ({ name, children, ...other }: TransitionEffectType) => (
    <CSSTransition classNames={name} appear {...other} addEndListener={() => console.log('first')}>
        {children}
    </CSSTransition>
)

const Loader = () => (
    <div className="loader">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </div>
)

const IMAGES = [
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504729/item_1_u25yn6.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504728/item3_lsidwj.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504728/item6_rz4d52.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504728/item2_uj5kok.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504728/item4_iavzds.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504728/item7_xsfgnc.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504729/item8_syuujv.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504730/item9_sy0ljf.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504730/item10_stpm1y.jpg",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504745/Screenshot_2024-05-23_at_23.45.38_wpdicv.png",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504731/item12_mxjy9x.png",
    "https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504747/Screenshot_2024-05-23_at_23.46.32_nx9ncm.png",
]

export const MasonryGrid = () => {
    const [loaded, setLoaded] = useState(false)

    const getImages = () => {
        imagesLoaded('.masonry-grid', () => {
           
            const masonry = new Masonry('.masonry-grid', {
                initLayout: false,
                fitWidth: true,
                gutter: 32,
                itemSelector: '.masonry-grid-item',
            })

            masonry.once!('layoutComplete', () => setLoaded(true))
            masonry.layout!()
        })
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className='flex items-center justify-center pt-10 overflow-y-scroll'>
            <div className="masonry-grid overflow-y-scroll">
                {IMAGES.map((item, index) => (
                    <TransitionEffect name={'slide'} in={loaded} timeout={500} key={index}>
                        <div
                            className="masonry-grid-item slide"
                            style={{
                                transitionDuration: `${500 + index * 80}ms`,
                                transitionDelay: `${index * 60}ms`,
                            }}
                        >
                            <Image src={item} alt="testing" height={600} width={300} className='image-card rounded-md cursor-pointer shadow-lg' />
                        </div>
                    </TransitionEffect>
                ))}
            </div>
        </div>
    )
}
