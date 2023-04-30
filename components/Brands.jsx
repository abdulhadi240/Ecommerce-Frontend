import React from 'react'
import Image from 'next/image'

const Brands = ({image , Title}) => {
  return (
    <div>
        <div className='h-[100px] w-20  border-[1px] border-gray-800 rounded-xl flex flex-col justify-center hover:bg-black/5'>
              <div className='text-center ml-[7px]'>
                <Image src={image} width={60} height={60} alt='img'/>
              </div>
              <h1 className='text-center'>{Title}</h1>
            </div>
    </div>
  )
}

export default Brands