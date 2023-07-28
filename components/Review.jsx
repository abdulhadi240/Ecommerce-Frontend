import React from 'react'
import Image from 'next/image'
import { BiCheckCircle } from 'react-icons/bi'
const Review = ({Data}) => {
  return (
    <div className='w-80 overflow-hidden  group '>
        <div className='stars flex justify-center group-hover:scale-105'>
            <Image src={'/stars.png'} width={100} height={100} alt='stars'/>

        </div>
        <div className='mt-4 text-center w-80 h-36 font-medium text-xl group-hover:scale-105'>
            {Data.description}
        </div>
        <div className='text-center mt-4 text-lg font-semibold group-hover:scale-105'>
            -{Data.name}
            <div className='flex fex-col justify-center gap-2 group-hover:scale-105' >
                <BiCheckCircle color='' className=' bg-green-500 border-green-500 rounded-full text-white group-hover:scale-105'/>
                <h1 className='font-bold text-green-500 text-sm group-hover:scale-105'>Verified Buyer</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Review