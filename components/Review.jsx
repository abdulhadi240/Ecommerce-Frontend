import React from 'react'
import Image from 'next/image'
import { BiCheckCircle } from 'react-icons/bi'
const Review = ({Data}) => {
  return (
    <div className='w-80 overflow-hidden'>
        <div className='stars flex justify-center'>
            <Image src={'/stars.png'} width={100} height={100} alt='stars'/>

        </div>
        <div className='mt-4 text-center w-80 h-36 font-medium text-xl'>
            {Data.description}
        </div>
        <div className='text-center mt-4 text-lg font-semibold'>
            -{Data.name}
            <div className='flex fex-col justify-center gap-2'>
                <BiCheckCircle color='' className=' bg-green-500 border-green-500 rounded-full text-white'/>
                <h1 className='font-bold text-green-500 text-sm'>Verified Buyer</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Review