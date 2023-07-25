import React from 'react'

const resumeURL = 'http://localhost:3000/PhatNgo-Resume.pdf';
const DownloadResume = () => {
    const downloadURL = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  return (
    <div className='flex flex-row-reverse fixed top-4 right-4 m-2 border rounded-sm border-primary px-1 hover:border-accent z-20'>
        <button onClick={() => {downloadURL(resumeURL)}}>Resume</button>
    </div>
  )
}

export default DownloadResume