import React from 'react'

export default function About() {
  return (
    <section className='about-shop-sec pb-[70px] pt-[70px]'>
      <div className='container mx-auto max-w-[1280px]'>
        <div className='section-title !mb-[20px]'>
          <h2 className='!leading-[50px]'>About our shop</h2>
          <p className='!text-[#838383]'>
            Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.
          </p>
        </div>

        <div className='flex flex-wrap px-[0] py-[15px] row-gap-[20px] -mr-[15px] -ml-[15px] row'>
          <div className='w-full sm:w-6/12 md:w-3/12 px-4'>
            <div className='about-us-box'>
              <h3>01</h3>
              <h4>Gift boxes</h4>
              <p>Finished products products and gift wrapping</p>
            </div>
          </div>

          <div className='w-full sm:w-6/12 md:w-3/12 px-4'>
            <div className='about-us-box'>
              <h3>02</h3>
              <h4>Promotions</h4>
              <p>Large and frequent promotions with numerous discounts</p>
            </div>
          </div>

          <div className='w-full sm:w-6/12 md:w-3/12 px-4'>
            <div className='about-us-box'>
              <h3>03</h3>
              <h4>Shipping</h4>
              <p>Free shipping on any order from $150</p>
            </div>
          </div>

          <div className='w-full sm:w-6/12 md:w-3/12 px-4'>
            <div className='about-us-box'>
              <h3>04</h3>
              <h4>Quality</h4>
              <p>All products are made by engineers and designers from India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
