'use client';
import React, {useEffect} from 'react';
import Image from 'next/image';
import Heading from './Heading';
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

function FourthHomeHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 , once: false})
  })
  return (
    <div>
      <div  className="image-container relative top-330 ">
      <div data-aos="fade-down" className='absolute top-12 left-40'>
         <Image
        src="/coins-icon.png"
        alt="Main-Hero"
        width={250}
        height={200}
        quality={100} // Max quality
        sizes="(max-width: 768px) 100vw, 550px" // Responsive
        priority 
        />
      </div>
      <div data-aos="fade-up">
        <div className='Hero-heading absolute right-40 top-10'>
        <Heading title='TRANSPARENT PRICING WITH' size='text-4xl' />
        <br/>
        <Heading title='NO HIDDEN CHARGES' size='text-4xl'/>
      </div>
      <div>
        <p className={`${roboto.className} absolute  top-35
        right-25
        font-thin text-2xl mx-4 my-12`}>We pioneered the concept of discount broking and price 
        <br/>
        transparency in India. Flat fees and no hidden charge.
        </p>
      </div>
        <div>
          <button className='absolute top-75 rounded-3xl right-122 bg-[#5cdb95] w-52 h-12 text-lg font-normal hover:scale-105 hover:bg-[#45c47c] transition duration-300 ease-in-out shadow-md'>Explore Our Products</button>
      </div>
      </div>
      </div>
      <div className='charge-out flex relative top-435 left-50 w-250 h-50 gap-x-40'>
        <motion.div  className='box-1 bg-[#bfbdbd] w-80 h-40 gap-x-10 rounded-2xl flex-col'
        data-aos="fade-left"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5 }}> 
          <div className='absolute top-4 left-4 '>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='text-3xl' />
          </div>
          <div className='relative top-8 flex justify-center'><h1 className='text-7xl'>0</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-10
        font-normal text-xl`}>Free account opening</p></div>
        </motion.div>
        <motion.div className='box-2 bg-[#bfbdbd] w-80 h-40 rounded-2xl relative' data-aos="fade-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
          <div className='absolute top-4 left-4'>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='absolute text-3xl '/>
          </div>
          <div className='absolute top-7 left-24 flex justify-center '><h1 className='text-7xl mx-auto'>0</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-25
        font-normal text-lg`}>Free equity delivery and
            <br/>
            direct mutual funds</p></div> 
        </motion.div>
        <motion.div className='box-3 bg-[#bfbdbd] w-80 h-40 gap-x-10 rounded-2xl'  data-aos="fade-left"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.5 }}>
          <div className='absolute top-4 right-47'>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='text-3xl'/> 
          </div>
          <div className='relative top-7 flex justify-center'><h1 className='text-7xl'>20</h1>
          </div>
          <div><p className={`${roboto.className} flex justify-center relative top-10
            font-normal text-xl`}>Intraday and F&O</p></div> 
        </motion.div>

      </div>
    </div> 

  );
}

export default FourthHomeHero;