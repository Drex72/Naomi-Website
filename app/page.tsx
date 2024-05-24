'use client'
import AppStart from '@/components/AppStart'
import { useState } from 'react'
import { HomeLayout } from './Home'

export default function Home() {
    const [pageLoaded, setPageLoaded] = useState(false)

    return (
        <main className="">
            {!pageLoaded && <AppStart setPageLoaded={setPageLoaded} />}
            {pageLoaded && <HomeLayout />}
            {/* <HomeLayout /> */}
        </main>
    )
}
