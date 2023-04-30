'use client'
import React from 'react'
import SingleProduct from './SingleProduct'
import HeaderText from 'jsonfig.json/components/HeaderText'
import Wrapper from './Wrapper'
import Link from 'next/link'
const Product = ({products}) => {

  return (
    <>
      <Wrapper>
        <HeaderText Heading='Running Shoes'>
          <p>A Lightweight Nike ZoomX midsole is combined with increased stock height</p>
        </HeaderText>
        
        <div className=' flex flex-row justify-center sm:grid md:grid sm:grid-cols-2  lg:grid-cols-3 gap-5 my-14  sm:mx-5 md:px-0 transition-transform duration-300'>
          {products?.data?.map((product)=>{
            return(
              <SingleProduct key={product?.id} data={product} />
            );
          })}
        </div>
      </Wrapper>
    </>
  )
}

export default Product