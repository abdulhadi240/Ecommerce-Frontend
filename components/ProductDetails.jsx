import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = ({images}) => {
    console.log(images);
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto  top-[50px] relative">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.data?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.thumbnail.url}
                        alt={img.attributes.name}
                        
                        
                    />
                ))}
                
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;