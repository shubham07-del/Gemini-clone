import React from 'react'
import { assets } from '../../assets/assets'

const Cards = () => {
  return (
    <div className='flex overflow-x-auto sm:grid sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-5 result'>
                <div className='min-w-[180px] h-[200px] p-3.5 rounded-md relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea] shrink-0'>
                    <p className='text-lg text-[#585858]'>Suggest beautiful places near me!</p>
                    <img className='absolute right-2 bottom-2' src={assets.compass_icon} alt="" />
                </div>
                <div className='min-w-[180px] h-[200px] p-3.5 rounded-md relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea] shrink-0'>
                    <p className='text-lg text-[#585858]'>Breaking news for today?</p>
                    <img className='absolute right-2 bottom-2' src={assets.bulb_icon} alt="" />
                </div>
                <div className='min-w-[180px] h-[200px] p-3.5 rounded-md relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea] shrink-0'>
                    <p className='text-lg text-[#585858]'>IPL matches!</p>
                    <img className='absolute right-2 bottom-2' src={assets.message_icon} alt="" />
                </div>
                <div className='min-w-[180px] h-[200px] p-3.5 rounded-md relative cursor-pointer bg-[#f0f4f9] hover:bg-[#dfe4ea] shrink-0'>
                    <p className='text-lg text-[#585858]'>Improve the readibility of this code!</p>
                    <img className='absolute right-2 bottom-2' src={assets.code_icon} alt="" />
                </div>
            </div>
  )
}

export default Cards