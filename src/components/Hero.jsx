import React from 'react'
import DownloadResume from './DownloadResume'
import {motion} from 'framer-motion'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "a full-stack developer.",
            "a UI/UX designer.",
            "an AI developer.",
            "a problem solver.",
            "a team player.",
            "a StackOverflow explorer.",
            "a Ctrl+C, Ctrl+V Wizard."
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen bg-background">
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{duration: .5}}>
            <DownloadResume/>
        </motion.div>
        <div className='flex flex-row-reverse p-5 m-5 justify-center items-center h-screen overflow-hidden text-center'>
            <div className='flex flex-col flex-end items-center w-1/2'>
                <Image 
                src="/home.jpg"
                width={450}
                height={450}
                alt='Portrait'
                className='relative rounded-md mx-auto ml-2 object-cover'
                />
                <p className='flex items-center text-gray-500 text-sm italic my-1'>photo by Collin Cassidy</p>
            </div>
            <div className='py-5 my-5 w-1/2 flex items-start flex-col'>
                <h3 className='primText text-xl lg:text-2xl'>Chào,</h3>
                <h1 className='primText text-4xl lg:text-6xl'>I&apos;m Phát Ngô,</h1>
                <span className='primText text-xl lg:text-2xl'>
                {text}
                <Cursor cursorColor='primary'/>
                <br/>
                </span>
                    <Link href="#about">
                    <button className='text-md lg:text-lg border border-primary rounded-sm my-7 px-1 hover:border-accent'>About me</button>
                    </Link>
            </div>
        </div>
    </div>
  )
}


