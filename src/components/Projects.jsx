import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Projects(){
  const [showProjects, setShowProjects] = useState()
  const url = './projects.json'
  let displayData 

  function pullProjects() {
    fetch(url)
    .then(res => res.json())
    .then(responseData => {
      displayData = responseData.projects.map(function(project, i){
        return(
          <div key={project.id} className='w-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 z-20'>
                <div className='flex flex-col items-end'>
                    <h1 className="text-3xl lg:text-3xl font-bold text-center text-primary">Project {i + 1}</h1>
                </div>
                <Image
                src={project.image}
                loading='lazy'
                width={600}
                height={600}
                alt="Project Landing Page"
                className='mt-5 rounded-sm'
                />
                <div className='space-y-4 text-2xl px-0 md:px-10 max-w-6 pt-5 text-center'>
                    <a className='border-b border-primary rounded-sm px-1 hover:border-accent' href={project.linkToBuild} target="_blank">{project.title}</a>
                    <p className='text-sm font-bold lg:text-xl text-center '>{project.summary}</p>
                </div>
            </div>
        )
      })
      setShowProjects(displayData)
    })
  }

  useEffect(() => {
    pullProjects()
  }, [])
  
  return (
    <div className="h-screen bg-background flex justify-center overflow-hidden flex-col text-left max-w-full mx-auto items-center z-10">
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-0'>
        {showProjects}
      </div>
    </div>
  )
}
