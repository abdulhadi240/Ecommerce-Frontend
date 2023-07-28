import { fetchData } from 'jsonfig.json/utils/api';
import { React, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Image from 'next/image';
import useSWR from "swr";
import Link from 'next/link';
import { motion } from "framer-motion"


export const Search = ({ showSearch, setShowSearch }) => {
  const [query, setQuery] = useState("");

  const { data, error, isLoading } = useSWR(`/api/products?populate=*&filters[name][$contains]=${query}`, fetchData);




  return (
    <div className='w-screen h-[1200px] sm:h-[1400px] z-50 bg-slate-50 absolute top-0 left-0 overflow-hidden'>
      <div className='flex'>
        <div className=''>
          <input type="text" placeholder='Search Product Here' onChange={(e) => { setQuery(e.target.value) }} value={query} className=' ml-8 w-80 mr-32 sm:w-[700px] sm:placeholder:text-2xl lg:w-[1500px] lg:text-4xl  value:text-center placeholder:text-center text-center mt-20 border-none outline-none ' />
          {/* <div className='h-[1px] ml-10 mt-1 bg-black ' /> */}
        </div>
        <VscChromeClose className='absolute right-10 top-5' onClick={() => {

          setShowSearch(false)
        }} />
      </div>
      <div className='ml-10 mt-10'>
        <div className='flex gap-2 bg-gray-100 rounded-md w-80 sm:w-[700px] lg:w-[1600px]'>
          <div className='flex flex-col gap-10'>
            {data?.data.map((data) => {
              let dur = 0.5;
              return (
                <Link href={`/product/${data.attributes.slug}`} onClick={() => { setShowSearch(false) }}>
                  <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:dur++}}
                    key={data.id}
                    className='flex hover:bg-gray-200 mt-3'>
                    {error && (<h1>Error while Fetching</h1>)}
                    {data ? (
                      <div key={data.id} className='flex gap-10'>
                      <Image src={data.attributes.thumbnail.data.attributes.url} width={100} height={100} alt='image' />
                      <div className='mt-3'>
                        <h1>{data.attributes.name}</h1>
                        <p>{data.attributes.subtitile}</p>
                        <h1 className='text-xs font-bold text-red-500'>{data.attributes.Featured}</h1>
                      </div>
                      </div>
                    ) :(
                      <div>
                        <h1>NO PRODUCT FOUND</h1>
                      </div>
                    )}
                  </motion.div>
                </Link>

              )
            })}

          </div>

        </div>



      </div>
    </div>
  )
}



