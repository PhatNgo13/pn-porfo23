import React from 'react'
// import Image from 'next/image'
// import AboutImage from '../../public/about.jpg'

const About = () => {
  return (
    <div className="h-screen bg-background text-center flex flex-row align-middle justify-center">
      {/* <div className='w-1/2 flex justify-center items-center flex-col'>
        <Image src={AboutImage}
                width={450}
                height={450}
                alt='Portrait'
                className='relative rounded-md mx-auto ml-2 object-cover'
                loading='lazy'
                />
    <p className='flex items-center text-gray-500 text-sm italic my-1'>photo by Collin Cassidy</p>
      </div> */}
      <div className='w-1/2 flex flex-col justify-center items-center p-5'>
        <h3 className='text-center pb-2 text-4xl lg:text-4xl lg:pb-5 text-bold text-primary'>About</h3>
        <p className='text-md mt-5 lg:text-xl'>Welcome to the world of digital craftsmanship! I've honed my skills through self-teaching and bootcamps, becoming pretty handy with both front-end and back-end programming. Whether I'm working solo or with a team, I strive to make user experiences smooth and add unique features to each projects. Want to innovate? Let&apos;s team up and create something awesome online!</p>
      </div>
    </div>
  )
}

export default About

