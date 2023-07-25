import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'


export default function Skill(){
  const [showSkills, setShowSkills] = useState()
  const url = 'http://localhost:3000/skills.json'
  let displayData

  function pullSkills(){
    fetch(url)
    .then(res => res.json())
    .then(responseData => {
      displayData = responseData.skills.map(function(skill){
        return(
        <div key={skill.id}>
        <div className='relative'>
        <motion.img
        initial={{
            x:100,
            opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        src={skill.image}
        className="rounded-full border-4 border-accent object-cover w-24 h-24 xl:w-32 xl:h-32 filter hover:grayscale"
        />
        <div className='absolute w-24 h-24 xl:w-32 xl:h-32 bg-primary/60 flex items-center justify-center top-0 rounded-full opacity-0 hover:opacity-100 transition duration-300'>
        <p className='text-3xl font-bold text-background relative opacity-100 z-0'>{skill.progress}</p>
        </div>
        </div>
      </div>
        )
      })
      setShowSkills(displayData)
    })
}

  useEffect(() => {
    pullSkills()
  })


  return (
    <div className='grid grid-cols-3 gap-5 cursor-pointer'>
      {showSkills}
    </div>
  )
}