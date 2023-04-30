import React from 'react'
import Image from 'next/image'
const Cashback = () => {
  return (
    <div className='overflow-hidden w-full sm:h-64 h-[350px] sm:px-24 lg:px-64 relative group bg-black/90 rounded-2xl mt-16'>
        <div className='flex flex-col sm:flex-row justify-between sm:px-52sm: gap-4'>
            <div className='flex flex-col mt-14 text-center sm:text-start'>
            <h1 className='text-2xl font-semibold sm:tracking-wide text-white'>Get 5% Cash Back</h1>
            <p className='sm:text-start text-center text-sm text-white'>on using Stripe</p>
            <button className='rounded-3xl p-2  mt-4 bg-white text-black'>Shop Now !!</button>
            </div>
            <Image src={'/cards.png'} height={300} width={300} alt='card' className=' -mt-10 brightness-150 ml-10 sm:-mt-0 sm:brightness-150 sm:ml-0'/>
        </div>


    </div>
  )
}

export default Cashback