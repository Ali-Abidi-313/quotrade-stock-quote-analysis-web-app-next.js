'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google'
import Heading from './Heading';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function SecondHomeHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 , once: false });
  }, []);
  return (
  <section className='w-full bg-white py-6 px-6 md:px-10 lg:px-20'>
    <div className='relative mx-auto flex flex-col md:flex-row items-center justify-between top-63 '>
      <div className="hero-image absolute -top-5 left-0  md:w-1/2 mb-10 md:mb-0" 
          data-aos="fade-right">
            
        <Image
          src="/pic2-home.jpg"
          alt="Main-Hero"
          width={550}
          height={400}
          quality={100} // Max quality
          sizes="(max-width: 768px) 100vw, 550px" // Responsive
          priority 
          className="rounded-xl max-w-[550px] h-auto"
        />
      </div>
      <div className="hero-heading flex-col absolute top-14 -right-20 w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
        <div>
          <h1 className=' italic font-bold text-5xl '>SIMPLIFYING  &nbsp;FINANCE,</h1>
          <br/>
          <h1 className=' italic font-extrabold text-5xl'>EMPOWERING &nbsp; YOU</h1>
        </div>
      
      <div>
        <p className={`${roboto.className} font-thin text-2xl mx-4 my-8`}>All in one platfrom for stocks, IPOs,
        <br/>
        mutual funds, currencies & more.
        </p>
      </div>
      <div>
        <p className={`${roboto.className} font-thin text-2xl mx-4 `}>Explore intelligent tools, real-time analytics
        <br/>
        and effortless execution.
        </p>
      </div>
      <div>
          <button className='absolute -bottom-20 rounded-3xl left-4 bg-[#5cdb95] w-52 h-12 text-lg font-normal hover:scale-105 hover:bg-[#45c47c] transition duration-300 ease-in-out shadow-md'>Explore Our Products</button>
      </div>

    </div>
    </div>
    </section>

  );
}

export default SecondHomeHero;