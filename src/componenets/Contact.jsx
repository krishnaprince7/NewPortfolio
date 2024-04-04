import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/Qe12rGaJ" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email or Social Media - princekrishna5707@gmail.com or 
                <a href="https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==" className='text-[#d62976] underline'> Instagram,</a>
          

                <a href="https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-[#d62976] underline'> Linkedin.</a>
                <a href="https://github.com/krishnaprince7" className='text-[#d62976] underline'> Github.</a>
                </p>
               
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    
    </>
  )
}

export default Contact