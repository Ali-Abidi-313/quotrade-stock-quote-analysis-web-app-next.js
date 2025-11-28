'use client';
import React, {useEffect} from 'react';
import Heading from './Heading';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import '../app/globals.css';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function ThirdHomeHero() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return ( 
    <div className=''>
      <div data-aos="fade-right" className={`clip-diagonal flex-col absolute top-350 left-10 bg-[#5cdb95] shadow-lg rounded-tr-[50px] rounded-br-4xl max-w-3xl shadow-lg pl-8 p-10 mx-auto w-220 h-90`}>
        <div>
          <h1 className=' italic font-bold text-4xl '>STAY AHEAD OF THE CURVE</h1>
          <br/>
          <h1 className=' italic font-extrabold text-4xl'>TRADE BETTER WITH QUOTRADE</h1>
        </div>
        <div className={`${roboto.className} hero-subheading mt-8 mb-5 mx-4`}>
          <h3 className={`${roboto.className} text-2xl font-light tracking-wider`}>STAY INFORMED, STAY AHEAD</h3>
        </div>
        <div>
        <p className={`${roboto.className} font-light text-2xl mx-4 `}>From NIFTY updates to curated watchlists
        <br/>
        everything you need, right at your fingertips.
        </p>
        </div>
      </div>
      <div data-aos="fade-left"className="hero-img absolute top-340 right-35">
        <Image
          src="/mobile-pic.png"
          alt="Main-Hero"
          width={220}
          height={100}
          quality={100} // Max quality
          sizes="(max-width: 768px) 100vw, 550px" // Responsive
          priority 
                />
      </div>
    
    </div>
  );
}

export default ThirdHomeHero;