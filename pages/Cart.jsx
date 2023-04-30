import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import { useSelector } from 'react-redux';
import CartItem from 'jsonfig.json/components/CartItem';
import { useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '../utils/api'
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs';
import Footer from 'jsonfig.json/components/Footer';
import Header from 'jsonfig.json/components/Header';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Tax = 5
const Shipping  =10;

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [subTotals , setSubTotals] = useState('');
    const { cartItems } = useSelector((state => state.cart))

    const Total = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price + ((total + val.attributes.price)*(Tax/100)) + Shipping ,
            0
        );
        
    }, [cartItems]);

    

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems
            })
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            })
        } catch (error) {
            setLoading(false);
            console.log(error);

        }
    }
    return (
        <>
    <Header/>
        <div className="w-full md:py-10">
            <Wrapper>
                {cartItems.length > 0 && (


                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Shopping Cart
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="hidden md:block text-sm text-gray-400">
                                    Names
                                </div>
                                <div className='md:flex  justify-end gap-10  -mt-5 hidden text-xs text-gray-400'>
                                    <div className='mr-7'>Price</div>
                                    <div className='mr-6'>Size</div>
                                    <div className='mr-[130px]'>Quantity</div>
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">


                                <div className="p-5 my-5 bg-black/[0.05] rounded-sm shadow-xl">
                                    <div className="text-lg font-bold text-center mb-4">Summary</div>
                                    <div className='flex flex-col gap-4 border-b'>
                                        <div className='flex justify-between '>
                                            <h1 className='text-gray-400'>Total</h1>
                                            <h1 className='text-black font-bold'>$ {Total}</h1>
                                        </div>

                                        <div className='flex justify-between '>
                                            <h1 className='text-gray-400'>Shipping Fee</h1>
                                            <h1 className='text-black font-bold'>$ {Shipping}</h1>
                                        </div>

                                        <div className='flex justify-between mb-4'>
                                            <h1 className='text-gray-400'>Tax</h1>
                                            <h1 className='text-black font-bold'>5%</h1>
                                        </div>
                                    </div>
                                    <div className='border-b flex justify-between mt-10'>
                                        <input type="text" placeholder='Enter Gift Code' className='w-64  bg-transparent outline-none' />

                                        <BsArrowRight className='text-lg text-gray-400' />
                                    </div>
                                    <div className='flex justify-between mt-10'>
                                        <div className="dropdown dropdown-end flex">
                                        <h1 className='text-gray-400'>Subtotal</h1>
                                            <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </label>
                                            <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-64 -mr-64">
                                                <div className="card-body ">
                                                    <h2 className="card-title"></h2>
                                                    <p>The subtotal reflects the total price of
                                                        your order, including duties and taxes,
                                                        before any applicable discounts. It does
                                                        not include delivery costs and
                                                        international transaction fees.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className='text-black font-bold'>$ {subTotal.toFixed()}</h1>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5">

                                    </div>
                                    {/* BUTTON START */}
                                <button
                                    className="w-full py-4  bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                    {loading && <img src="/loader.svg" />}
                                </button>
                                {/* BUTTON END */}
                                </div>

                                
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}


                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </Wrapper>
        </div>
        <Footer/>
        </>
    )
}

export default Cart