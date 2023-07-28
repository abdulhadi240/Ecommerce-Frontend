import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Brands = ({image , Title}) => {
  return (
    <div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2 , duration:1}} className='h-[100px] w-20  border-[1px] border-gray-800 rounded-xl flex flex-col justify-center hover:bg-black/5'>
              <div className='text-center ml-[7px]'>
                <Image src={image} width={60} height={60} alt='img'/>
              </div>
              <h1 className='text-center'>{Title}</h1>
            </motion.div>
    </div>
  )
}

export default Brands