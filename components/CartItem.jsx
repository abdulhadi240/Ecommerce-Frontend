import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const CartItem = ({ data }) => {
    const p = data.attributes;

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };

    return (
        <>
        <div className="flex py-3 sm:my-10 sm:py-6  gap-4 md:gap-4 flex-grow lg:my-5  md:-mb-16 text-black">
            {/* IMAGE START */}
           <Link  href={`/product/${p.slug}`}> <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={50}
                    height={50}
                />
            </div>
            </Link>
            {/* IMAGE END */}

            <div className="w-full flex flex-col md:flex-row md:gap-10">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-xs md:mt-6 md:-ml-12 w-44 font-semibold text-black/[0.8]">
                        {p.name}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="flex-col md:ml-40 text-xs">
                        {/* <h1 className="hidden md:block -mt-10">Price</h1> */}
                    <div className="text-xs  md:mt-7 font-semibold text-black mt-2  ">
                        
                        $ {p.price}
                    </div>
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                {/* <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {p.subtitle}
                </div> */}

                <div className="flex items-center justify-between mt-4  text-xs">
                    <div className="flex items-center gap-2 md:gap-12 text-black text-xs md:text-xs ">
                        <div className="flex md:flex-col items-center gap-1 md:w-12 md:ml-4">
                            {/* <div className="font-semibold md:-mt-[70px]">Size:</div> */}
                            <select
                            defaultValue={p.size.data.size}
                                className="hover:text-black "
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize")
                                }
                            >
                                {p.size.data.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item.size}
                                            disabled={
                                                !item.enabled ? true : false
                                            }
                                            // selected={
                                            //     data.selectedSize === item.size
                                            // }
                                        >
                                            {item.size}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="flex md:flex-col items-center gap-1 md:w-12 text-xs">
                            {/* <div className="font-semibold md:-mt-[70px]">Quantity:</div> */}
                            <select 
                            defaultValue={1}
                                className="hover:text-black  md:mr-6"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: p.StockNumber },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            // selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() =>
                            dispatch(removeFromCart({ id: data.id }))
                        }
                        className="cursor-pointer  xl:absolute xl:right-[630px] md:-mt-1 text-black/[0.5] hover:text-black text-[16px] "
                    />
                </div>
            </div>
        </div>
                    <div className="h-[1px] w-full text-black/[0.5] bg-black/[0.2] sm:hidden"/>
                    </>

    );
};

export default CartItem;