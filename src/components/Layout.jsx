"use client"
import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {GiHamburgerMenu} from "react-icons/gi"
import { SocialIcon } from 'react-social-icons'
import Hero from './Hero'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('hamburger-menu')) {
            setIsMenuOpen(false);
    }};

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseMenu);
        return () => {
            document.removeEventListener('mousedown', handleCloseMenu);
        };
    }, []);

  return (
    <div className='flex z-0'>
        <div className='hidden lg:block w-1/5 z-40 h-screen bg-background border-r border-primary'>
            <Link href="#hero" className='flex justify-center items-center m-4 border-b border-primary '>
                <Image
                src="logo-no-background.svg"
                width={200}
                height={200}
                objectFit="contain"
                alt='Website Logo'
                className='p-4 flex justify-center align-items-center'
                />
            </Link> 
            <div className='m-4 border-b border-primary p-4'>
                    <div className='flex flex-col m-4 justify-start items-center gap-4 pb-4 rounded-md group cursor-pointer'>
                        <Link href="#hero">
                            <button className='navBtn transition duration-100'>Home</button>
                        </Link>
                        <Link href="#about">
                            <button className='navBtn'>About</button> 
                        </Link>
                        <Link href="#skills">
                            <button className='navBtn'>Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className='navBtn'>Projects</button>
                        </Link>
                        <Link href="#contact">
                            <button className='navBtn'>Contact</button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center px-4 m-4 border-b border-primary pb-5'>
                    <SocialIcon url='https://www.linkedin.com/in/phatt-ngo/' fgColor='accent' bgColor='transparent' className='m-2' target='_blank'/>
                    <SocialIcon url='https://github.com/PhatNgo13' fgColor='accent' bgColor='transparent' className='m-2 py-2' target='_blank'/>
                </div>
        </div>
        <div className='w-full h-screen overflow-scroll snap-mandatory snap-y bg-background border-r border-primary'>
            {isMenuOpen ? (
                <div ref={menuRef} className='fixed w-1/2 top-0 left-0 right-0 bottom-0 bg-background border-r border-primary z-20'>
                    <Link href="#hero" className='flex justify-center items-center m-4 border-b border-primary'>
                        <Image
                        src="logo-no-background.svg"
                        width={200}
                        height={200}
                        objectFit="contain"
                        alt='Website Logo'
                        className='p-4 flex justify-center align-items-center'
                        />
                    </Link> 
                    <div className='m-4 border-b border-primary p-4'>
                        <div className='flex flex-col m-4 justify-start items-center gap-4 pb-4 rounded-md group cursor-pointer'>
                            <Link href="#hero">
                                <button className='navBtn'>Home</button>
                            </Link>
                            <Link href="#about">
                                <button className='navBtn'>About</button> 
                            </Link>
                            <Link href="#skills">
                                <button className='navBtn'>Skills</button>
                            </Link>
                            <Link href="#projects">
                                <button className='navBtn'>Projects</button>
                            </Link>
                            <Link href="#contact">
                                <button className='navBtn'>Contact</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center px-4 m-4 pb-5 border-b border-primary'>
                        <SocialIcon url='https://www.linkedin.com/in/phatt-ngo/' fgColor='accent' bgColor='transparent' className='m-2' target='_blank'/>
                        <SocialIcon url='https://github.com/PhatNgo13' fgColor='accent' bgColor='transparent' className='m-2 py-1' target='_blank'/>
                    </div>
                </div>
            ) : (
                <button onClick={toggleMenu} className='hamburger-menu lg:hidden fixed top-4 left-4 bg-transparent p-2 rounded-md text-primary'>
                    <GiHamburgerMenu className='h-6 w-6'/>
                </button>
        )}
        <section id='hero' className="snap-start">
        <Hero/>
        </section>

        <section id='about' className="snap-center">
        <About/>
        </section>

        <section id='skills' className='snap-center'>
        <Skills/>
        </section>

        <section id='projects' className='snap-center'>
            <Projects/>
        </section>

        <section id='contact' className='snap-center'>
            <Contact/>
        </section>
    </div>
    </div>
  )
};

export default Layout;

