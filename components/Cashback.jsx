import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Cashback = () => {
  return (
    <section className="mx-auto max-w-7xl mt-32 px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl  font-bold text-center sm:text-start leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-center sm:text-start text-base leading-relaxed text-gray-600 lg:mx-auto">
          Find the answers you need with our Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          
            <div className='group '>
              <h2 className="text-xl text-center sm:text-start font-semibold text-black group-hover:scale-110 group-hover:transition-all">How do I place an order on your eCommerce website?</h2>
              <p className="mt-6 text-sm text-center sm:text-start  leading-6 tracking-wide text-gray-500 group-hover:scale-110 group-hover:transition-all">
              To place an order on our eCommerce website, simply select the item you want to purchase and add it to your cart. Then, proceed to the checkout page and enter your shipping and payment information. Once you have reviewed your order, click the "Place Order" button to complete the transaction.
              </p>
            </div>

            <div className='group '>
              <h2 className="text-xl text-center sm:text-start font-semibold text-black group-hover:scale-110 group-hover:transition-all">What payment options do you offer on your eCommerce website?</h2>
              <p className="mt-6 text-sm text-center sm:text-start  leading-6 tracking-wide text-gray-500 group-hover:scale-110 group-hover:transition-all">
              We offer a variety of payment options on our eCommerce website, including credit cards, debit cards, stripe.
              </p>
            </div>

            <div className='group '>
              <h2 className="text-xl text-center sm:text-start font-semibold text-black group-hover:scale-110 group-hover:transition-all">What is your return policy for eCommerce orders?</h2>
              <p className="mt-6 text-sm text-center sm:text-start  leading-6 tracking-wide text-gray-500 group-hover:scale-110 group-hover:transition-all">
              We offer a 30-day return policy for most items purchased on our eCommerce website. If you are not satisfied with your purchase, you can return it for a full refund or exchange it for a different item.
              </p>
            </div>

            <div className='group '>
              <h2 className="text-xl text-center sm:text-start font-semibold text-black group-hover:scale-110 group-hover:transition-all">Do you offer free shipping on eCommerce orders?</h2>
              <p className="mt-6 text-sm text-center sm:text-start  leading-6 tracking-wide text-gray-500 group-hover:scale-110 group-hover:transition-all">
              We offer free shipping on orders over a certain amount. The specific amount varies depending on your location and the items you are purchasing.
              </p>
            </div>
            
          
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <Link href={'/contact'} className="black font-semibold hover:underline">Contact us</Link>
        </p>
      </div>
    </section>
  )
}

export default Cashback