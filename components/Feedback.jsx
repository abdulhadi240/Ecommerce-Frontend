import React from "react";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Reviews } from "jsonfig.json/utils/Reviews";
import Review from "./Review";

const Feedback = () => {
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
        <div className="overflow-hidden mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className="text-3xl   relative text-center font-bold mb-10 flex justify-center ">100,000+ Happy Customers</div>
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
                responsive={responsive}
                containerClass=""
                itemClass="px-[20px]"
                className="z-0"
            >
                {Reviews?.Data?.map((data) => (
                    <Review key={data.id} Data={data}/>
                ))}
            </Carousel>
        </div>
    );
};

export default Feedback;