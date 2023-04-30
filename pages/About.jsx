import Footer from 'jsonfig.json/components/Footer';
import Header from 'jsonfig.json/components/Header';
import ImageScroll from 'jsonfig.json/components/ImageScroll'
import Product from 'jsonfig.json/components/Product'
import { fetchData } from 'jsonfig.json/utils/api'



export default function About({products}) {



  return (
    <>
    <Header/>
    <main>

    
      <ImageScroll />
      <Product products={products} />
      
      
      





    </main>
    <Footer/>
    </>
  )
}



 export async function getServerSideProps() {
   const products = await fetchData("/api/products?populate=*");

   return {
     props: { products }
  }
 }