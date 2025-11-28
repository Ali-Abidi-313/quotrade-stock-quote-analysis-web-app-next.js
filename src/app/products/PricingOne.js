import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function PricingOne({ tittle , content = [], Btncontent ,toppos, pos}) {
  return ( 
  <div>
    <div className={`relative flex flex-col ${toppos} ${pos} `}>
      <h1 className='text-4xl italic font-bold'>{tittle}</h1>
      <div className='my-8'>
        {content.map((line, index) => (
          <p key={index} className={`${roboto.className} text-lg font-normal my-1`}>{line}</p>))}
      </div>
      <div>
          <button className='absolute -bottom-16 rounded-3xl left-0 bg-[#5cdb95] w-52 h-12 text-lg font-normal hover:scale-105 hover:bg-[#45c47c] transition duration-300 ease-in-out shadow-md z-10'>{Btncontent}</button>
      </div>
    </div>

  </div> );
}

export default PricingOne;