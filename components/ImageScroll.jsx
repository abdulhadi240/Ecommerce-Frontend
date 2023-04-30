import React, { useState } from 'react'
import { BsChevronCompactLeft , BsChevronCompactRight  } from 'react-icons/bs' 
import { RxDotFilled } from 'react-icons/rx' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';

const ImageScroll = () => {
    return (
      <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
         <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false}>
                <div className=''>
                    <Image src="/slide-1.png" priority={true} width={1000} height={1000}  alt='image ' className='aspect-auto object-cover '/>
                    
                </div>
                <div>
                    <Image src="/slide-2.png" priority={true} width={1000}  alt='image 'height={1000}/>
                    
                </div>
                <div>
                    <Image src="/slide-3.png" priority={true} width={1000} alt='image ' height={1000}/>
                    
                </div>
            </Carousel>

      </div>
    )
  }
  
  export default ImageScroll







// const images =[
//     {
//         url:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'

//     },

//     {
//         url:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

//     },

//     {
//         url:'https://images.unsplash.com/photo-1636718282214-0b4162a154f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

//     },

//     {
//         url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

//     },
// ]


// const ImageScroll = () => {

//     const [currentIndex, setCurrentIndex] = useState(2);

//     function Left(){
//         const isFirstSlide = currentIndex===0;
//         const newIndex = isFirstSlide ? images.length-1 : currentIndex-1;
//         setCurrentIndex(newIndex);
//     }

//     function Right(){
//         const isLastSlide = currentIndex===images.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     }

//     const goToSlide =(slideIndex)=>{
//         setCurrentIndex(slideIndex);
//     }


//   return (
//     <div className=' h-[700px]  m-auto py-16 px-4 group'>
//         <div 
//         style={{backgroundImage:`url(${images[currentIndex].url})`}} 
//         className='w-full h-full rounded-2xl bg-center duration-300'>

//         </div>

//         <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white'>
//             <BsChevronCompactLeft size={30} onClick={Left}/>
//         </div>
//          <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white'>
//             <BsChevronCompactRight size={30} onClick={Right}/>
//         </div>
//         <div className='flex top-4 justify-center py-3'>
//             {images.map((image,index)=>(
//                 <div className='cursor-pointer' key={index}>
//                     <RxDotFilled size={20} onClick={()=>goToSlide(index)}/>
//                     </div>
//             ))}
//         </div>
//     </div>
    
//   )
// }

// export default ImageScroll

