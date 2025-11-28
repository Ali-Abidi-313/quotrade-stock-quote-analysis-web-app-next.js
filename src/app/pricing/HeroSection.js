
'use client';
import React, {useEffect} from 'react';
import { Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function Hero() {
  useEffect(() => {
      AOS.init({ duration: 1000 , once: false})
    })
  return ( 
  <div className=''>
    <div className='charge-out flex relative top-50 left-20 w-300 h-50 gap-x-40 '>
        <motion.div  className='box-1 bg-[#bfbdbd] w-[36rem] h-60 rounded-2xl flex flex-col hover:shadow-xl'
          data-aos="fade-left"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}> 
          <div className='absolute top-4 left-4 '>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='text-4xl' />
          </div>
          <div className='relative top-6 flex justify-center'><h1 className='text-8xl'>0</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-8
        font-normal text-2xl `}>Free equity delivery</p></div>
        <div><p className={`${roboto.className} flex justify-center relative top-8
        font-normal text-base text-center mt-2`}>No charges on equity delivery<br/> across NSE and BSE.</p></div>
        </motion.div>
        <motion.div className='box-2 bg-[#bfbdbd] w-[36rem] h-60 rounded-2xl relative hover:shadow-xl' data-aos="fade-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
          <div className='absolute top-4 left-4'>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='absolute text-4xl '/>
          </div>
          <div className='absolute top-7 left-25 flex justify-center '><h1 className='text-8xl mx-auto'>20</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-32
        font-normal text-2xl`}>Intraday and F&O trades 
            </p></div>
            <div><p className={`${roboto.className} flex justify-center relative top-32
        font-normal text-base text-center mt-2`}>Flat ₹20 or 0.03% per executed <br/>order, whichever is lower. </p></div> 
        </motion.div>
        <motion.div className='box-3 bg-[#bfbdbd] w-[36rem] h-60  rounded-2xl hover:shadow-xl'  data-aos="fade-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}>
          <div className='absolute top-4 ml-4'>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='text-4xl'/> 
          </div>
          <div className='relative top-7 flex justify-center'><h1 className='text-8xl'>0</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-8
            font-normal text-2xl`}>Free direct MF</p></div> 
            <div><p className={`${roboto.className} flex justify-center relative top-8
        font-normal text-base text-center mt-2`}>Invest in direct mutual funds<br/>with zero commission. </p></div> 
        </motion.div>

      </div>
  </div> );
}

export default Hero;