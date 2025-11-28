'use client';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function ProductHeading(props) {
  return ( 
    <div className="flex flex-col items-center justify-center my-10 re
    lative ">
      <h1 className={`${roboto.className} font-bold text-6xl absolute top-30`} {...props}>Quo<span className='text-[#4da8da]'>Trade</span> {props.product}</h1>
    </div>
  );
}

export default ProductHeading;