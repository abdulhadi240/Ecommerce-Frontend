import React from "react";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleProduct from "./SingleProduct";

const RelatedProducts = ({products , title}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="mt-[50px] z-0 relative md:mt-[100px] mb-[100px] md:mb-0 -mx-10 lg:-mx-0">
            <div className="text-2xl font-bold mb-5">{title}</div>
            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[20px]"
                className="z-0"
            >
                {products?.data?.map((product) => (
                    <SingleProduct key={product?.id} data={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default RelatedProducts;