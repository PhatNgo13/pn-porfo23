import React from 'react'
import Skill from './Skill'


const Skills = () => {

  return (
    <div className="h-screen bg-background flex flex-col justify-center items-center text-center">
        <div className='flex flex-col justify-center items-center pb-5'>
            <h1 className='text-4xl lg:6xl text-bold text-primary'>Skills</h1>
            <p className='text-md mb-5 text-gray-600 italic lg:text-xl'>Hover to see proficiency</p>
        </div>
      <div className='grid grid-cols gap-5'>
        <Skill/>
      </div>
    </div>
  )
}

export default Skills