import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { ContextData } from '../../context/ContextProvider'
import GreetpCard from './GreetpCard'

const Main = () => {

    const {onSent,recentPrompt,showResults,loading,resultData,input,setInput} = useContext(ContextData)


  return (
    <div className='flex-1 min-h-screen p-4 sm:p-10 relative overflow-hidden'>
        {/* Added ml-[50px] sm:ml-0 to ensure "Gemini" text is not hidden behind the mobile sidebar icon */}
        <div className='flex text-2xl items-center justify-between ml-[60px] sm:ml-0'>
            <p className='text-[#585858] font-semibold sm:font-normal'>Gemini</p>
            <img className='w-[60px] rounded-4xl cursor-pointer' src={assets.user_icon} alt="" />
        </div>

        <div className='max-w-[1000px] m-auto'>

            {!showResults ? <GreetpCard/>:
             <div className='relative result max-h-[70vh] px-[5%] overflow-y-auto'>
                    <p className='absolute right-2 px-6 py-4 bg-[#7574741d] rounded-3xl rounded-tr-none text-2xl'>{recentPrompt}</p>
                {/* <div className='mt-10'>
                </div> */}

                <div className='mt-20 sm:mt-40'>
                   <div className='flex items-center relative'>
                     {/* Swapped relative/absolute bindings so the text aligns properly */}
                     <img className='w-[40px] sm:w-[70px] mr-2 sm:mr-4' src={assets.gemini_icon} alt="" />
                     <span className='px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-sm sm:text-lg hover:bg-[#97979720]'>Showing results.</span>
                   </div>
                    {loading?
                    <div className='loader w-screen flex flex-col gap-2.5'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p className='result-data text-2xl' dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
             </div>
             }

            <div className='absolute bottom-0 w-full max-w-[900px] px-2 sm:px-5 m-auto'>
                <div className='flex items-center justify-between gap-2 sm:gap-6 bg-[#f0f4f9] p-3 sm:p-6 rounded-full sm:rounded-4xl'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask Gemini 3' className='flex-1 bg-transparent text-lg sm:text-2xl border-none outline-none' />
                    <div className='flex gap-2 sm:gap-4'>
                        <img className='w-[20px] sm:w-[24px] cursor-pointer' src={assets.gallery_icon} alt="" />
                        <img className='w-[20px] sm:w-[24px] cursor-pointer' src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} className='w-[20px] sm:w-[24px] cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                </div>
                    <p className='mistake'>Gemini can make mistake.</p>
            </div>

        </div>
    </div>
  )
}

export default Main