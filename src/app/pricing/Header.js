import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function Header() {
  return (  
    <div>
      <motion.h1
      initial={{opacity:0 , y:12}}
      animate={{opacity:1 , y:0}}
      transition={{duration: 0.4}}
      className={`${roboto.className} text-4xl font-bold`}>
        Quo<span className='text-[#4da8da]'>Trade</span> Brokerage Calculator  
      </motion.h1>
      <p className='mt-1'>Clean, fast & accurate. Unique UI; formulas centralized for easy control.</p>
    </div>
  );
}

export default Header;