'use client';
import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google';
import { motion } from 'framer-motion';


const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],        // Required
  weight: ['400', '700'],    // Optional: choose the weights you need
  display: 'swap',           // Optional: improves performance
});
const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function Herosection() {
  return ( 
  <>
  <section className='px-4 py-16 max-w-7xl mx-auto'>
    <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 '>
          <motion.div className='w-full md:w-1/2 hero-banner relative top-12 left-12'
          initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
            <div >
            <motion.h1
                className='hero-heading italic font-extrabold sm:text-4xl
                text-5xl md:text-5xl'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
             LIVE&nbsp;STOCKS&nbsp;QUOTES
            </motion.h1>

            {/* <h1 className='hero-heading italic font-bold text-5xl '>LIVE&nbsp;STOCKS&nbsp;QUOTES</h1> */}
            <br/>
            <motion.h1
                className='hero-heading italic font-extrabold sm:text-4xl
                text-5xl md:text-5xl mt-3'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
             SEAMLESS&nbsp;EXECUTION
            </motion.h1>
            {/* <h1 className='hero-heading italic font-extrabold text-5xl mt-3'>SEAMLESS&nbsp;EXECUTION</h1> */}
          </div>
          <motion.div className={`${roboto.className} hero-subheading mt-8 mb-5 mx-4`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
            <h3 className='font-thin text-2xl tracking-wide md:text-2xl font-light md:mt-10'>INVEST RIGHT, INVEST NOW</h3>
          </motion.div>
          <div>
            <motion.p className={`${roboto.className} font-thin md:text-xl text-2xl mx-4 mt-8`} initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>Smart investing in stocks, F&O, mutual fund
              <br/>
              and more made simple
            </motion.p>
          </div>
          <div>
            <button className='absolute -bottom-25 rounded-3xl left-4 bg-[#5cdb95] w-50 h-12 text-lg  font-normal hover:scale-105 hover:bg-[#45c47c] transition duration-300 ease-in-out shadow-md'>Sign up for FREE</button>
          </div>
        </motion.div> 
        <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className='hero-image absolute right-10 top-20 h-auto wrap w-full md:w-1/2 flex justify-center'
>
  <Image
    src="/pic1.jpg"
    alt="Main-Hero"
    width={600}
    height={500}
    quality={100}
    sizes="(max-width: 768px) 100vw, 550px"
    priority 
  />
</motion.div>

        {/* <div className='hero-image absolute right-10 top-10'>
        <Image
        src="/pic1.jpg"
        alt="Main-Hero"
        width={600}
        height={500}
        quality={100} // Max quality
        sizes="(max-width: 768px) 100vw, 550px" // Responsive
        priority 
        />
        </div> */}

      </div>
    </section>
  </>
  
  );
}

export default Herosection;
