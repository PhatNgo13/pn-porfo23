import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        window.location.href = `mailto:jngo11601@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.fullName}.${data.message}`
    }
  return (
    <div className="h-screen bg-background flex flex-col text-center max-w-7xl p-5 justify-center items-center mb-5">
      <h1 className="text-4xl font-bold text-center text-primary">Contact</h1>
      <h4 className='italic text-secondary text-md'>Got something for me? Let&apos;s talk</h4>
        <div className='p-5 m-5'>
        <div className='flex justify-center items-center p-5 m-5'>
            <form id="contactForm" className='flex flex-col space-y-2 w-full mx-auto'
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex space-x-2'>
                    <input className='contactBtn' type="text" {...register("fullName", { required: "Required" })} placeholder='Full Name'/>
                    <input className='contactBtn' type="text" {...register("email", { required: "Required", minLength: {
                        value: 5,
                        message:"Minimum length is 5 characters"
                    } })} placeholder='email@email.com'/>
                </div>
                <input className='contactBtn' type="text" {...register("subject", { required: "This is required" })} placeholder='Subject' />
                <textarea className='contactBtn' {...register("message", { required: "This is required" })} placeholder='Message' />
                <button className='border rounded-sm border-primary hover:border-accent' type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact