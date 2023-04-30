import Footer from 'jsonfig.json/components/Footer';
import Header from 'jsonfig.json/components/Header';
import ImageScroll from 'jsonfig.json/components/ImageScroll'
import Product from 'jsonfig.json/components/Product'
import Wrapper from 'jsonfig.json/components/Wrapper';
import { fetchData } from 'jsonfig.json/utils/api'
import Image from 'next/image';
import { TbDiscount2 } from 'react-icons/tb';
import Home1 from 'jsonfig.json/src/pages/Home1'
import CanvasModel from '../src/canvas/CanvasModel'
import Customizer from '../src/pages/Customizer'
import { MdLabelImportant } from 'react-icons/Md';
import Brands from 'jsonfig.json/components/Brands';
import { TbBrandSlack } from 'react-icons/tb'
import Category from 'jsonfig.json/components/Category';
import Link from 'next/link';
import SingleProduct from 'jsonfig.json/components/SingleProduct';
import RelatedProducts from 'jsonfig.json/components/RelatedProduct';
import Feedback from 'jsonfig.json/components/Feedback';
import Cashback from 'jsonfig.json/components/Cashback';
// import {Home1} from '../src/pages/Home'




export default function Home({ products }) {
  {console.log(products)}



  return (
    <>
      <Header />
      <main className='overflow-hidden'>

       
        {/* LEFT SIDE */}

        <Wrapper>
          <div className='flex flex-col flex-grow sm:flex-row justify-between sm:gap-4 lg:gap-0'>
            <div className=' ml-10  text-4xl mt-10 w-[270px] justify-center tracking-wide font-medium lg:text-5xl lg:w-[350px]'>
              <h1 className=''><span className='w-16 h-10 pl-1 pr-1  bg-black text-white  rounded-full border-2 border-black'>Revamp</span> your Wardrobe with our fashion style</h1>
              <p className='text-sm font-medium mt-6 sm:w-64 lg:w-[350px]'>It is for you to find a perfect card along with the detailed information you want and helps you use it easily </p>
              <button className='text-sm bg-black text-white p-2 rounded-md -ml-2 mt-4 w-full sm:w-32 sm:-ml-0 sm:mt-4 '>Shop Now</button>
            </div>


            <div className='ml-3 w-80 sm:w-auto'>
              <Image src={'/image.webp'} width={500} height={400} />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row'>
            <div className='ml-6 sm:ml-12 sm:mt-6'>
              <div className='flex justify-start'>
                <div className=' border-2 w-16 h-36  mt-6 border-black lg:w-32 lg:h-52 rounded-full relative'>
                  <div className='lg:h-24 lg:w-24 h-14 w-14  rounded-full bg-black absolute top-5 -right-6 lg:top-8 lg:-right-10 text-white'>
                    <h1 className='lg:text-2xl lg:ml-7 lg:mt-3 ml-4 text-sm mt-2'>30% OFF</h1>
                  </div>

                </div>
                <div className='text-3xl item-center w-64 mt-10 lg:mt-16 ml-16'>
                  <h1>Avail Massive <span className='bg-green-300 p-1 rounded-lg mt-2 font-medium'>Discount !</span></h1>
                  <TbDiscount2 className='text-4xl mt-3 ml-6' />
                </div>

              </div>
            </div>
            <div className='flex'>
              <div className='mt-8 text-center hidden lg:block lg:text-justify lg:w-44 lg:mt-20 lg:-ml-10'>
                <MdLabelImportant className='text-xl hidden lg:block' />
                <h1 className='font-semibold text-xl '>Sustainable Fashion</h1>
                <p className='w-64 text-xs lg:text-sm'>A fashion company that specializes in creating customize clothing</p>
              </div>
              {/* <TbBrandSlack className='text-2xl  '/> */}
              <div className='flex flex-col mt-5 text-center'>
                <h1 className='font-semibold ml-6 lg:mt-5 lg:ml-28 sm:-ml-16 flex justify-center text-center tracking-wide text-2xl'>Top Brands</h1>


                <div className='flex ml-10 sm:-ml-10 gap-6 lg:ml-28 lg:mt-6 mt-10'>

                  <Brands image='/brand1.png' Title='Aarond' />
                  <Brands image='/brand2.png' Title='Dior' />
                  <Brands image='/brand3.png' Title='Nike' />
                </div>
              </div>
            </div>


          </div>


          {/* Customize Section */}
          <div className="app transition-all ease-in">
            <Home1/>
      </div>


      {/* Categories */}
      <div className='lg:-mt-28 sm:mt-10 flex justify-center text-3xl font-semibold '>
        <div className='flex flex-col'>
        <h1>Categories</h1>
        <div className='h-[1px] w-full font-thin  bg-black/20'/>
        </div>
      </div>
      <div className='flex justify-center mt-10 '>
      <div className='grid grid-cols-1 text-center object-fill object-center sm:grid-cols-3 lg:grid-cols-5 gap-7'>
        <Link href={'/category/football-1'}><Category title='Football' image='/i.jpg'/></Link>
        <Link href={'/category/ba-1'}><Category title='BasketBall' image='/basketball.jpg'/></Link>
        <Link href={'/category/r'}><Category title='Rugby' image='/rugby.jpg'/></Link>
        <Link href={'/category/ba-1'}><Category title='BaseBall' image='/baseball.jpg'/></Link>
        <Link href={'/'}><Category title='...More' image='/black.jpg'/></Link>

       
      </div>
      </div>

      {/* Popular Products */}
<div className='px-6 sm:px-14 lg:px-20'>
      <RelatedProducts products={products} title={'Popular Product'}/>
      </div>

      <Cashback/>

      <Feedback/>

        </Wrapper>







      </main>
      <Footer />
    </>
  )
}



export async function getServerSideProps() {
  const products = await fetchData("/api/products?populate=*&pagination[page]=1&pagination[pageSize]=6");
  

  return {
    props: { products }
  }
}