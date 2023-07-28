import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const SingleProduct = ({ data: { attributes: p, id } }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={`/product/${p.slug}`}>

      <div className=" object-center   w-auto flex flex-col   lg:p-6 bg-[#fdfdfd] border-[1px] border-black/20 rounded-md shadow-md group -ml-3  group cursor-pointer transi" onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false) }}>

        <div className="block relative h-72 rounded overflow-hidden  w-auto ">
          <Image priority={true} width={250} height={250} src={p.thumbnail.data.attributes.url } alt={p.name} className='w-auto ml-2 sm:ml-6 lg:ml-0 object-center group-hover:scale-75 group-hover:-mt-2 group-hover:transition-transform  group-hover:delay-200' />   
          <div>
            <Image src={'/logo.svg'} alt='image' width={30} height={30} className='absolute top-0 '></Image>
          </div>
        </div>
        <div className='flex justify-between' >
          <div className=" ml-4 mt-10 sm:ml-0 ">
            {hover && (
              <>
                <div className='flex gap-1 -mt-16 absolute  justify-center transition-all duration-200'>

                  {p.categories.data.map((cat) => {
                    return (

                      <h3 className="rounded-lg bg-black p-[3px] pl-2 pr-2   text-white text-xs tracking-widest title-font mb-1" key={cat.id}>{cat.attributes.name}</h3>
                    );
                  })}
                </div>


                <div className='-mt-6'>
                  <h1 className='text-red-700 opacity-70 font-bold text-xs '>{p.Featured}</h1>
                </div>


                <div className='flex flex-row justify-between'>
                  <div className='flex flex-col '>
                  <h2 className="text-gray-900 title-font text-lg w-40 font-medium">{p.name}</h2>
                  <p className="mt-1">$ {p.price}</p>
                  </div>

                  <div>
                    {p.Stock ? (
                      <h1 className='text-green-600 font-bold w-full  ml-6 text-xs mt-2'>IN STOCK</h1>
                    ) : (
                      <h1 className='text-red-600 font-bold w-full ml-10 text-xs mt-2'>SOLD OUT</h1>
                    )}
                  </div>
                </div>
              </>
            )}



          </div>
        </div>
      </div>
    </Link>
  )
}

export default SingleProduct