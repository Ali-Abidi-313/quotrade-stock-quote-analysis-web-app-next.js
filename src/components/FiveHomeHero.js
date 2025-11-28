import React from 'react';
import Heading from './Heading';
import Image from 'next/image';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function FiveHomeHero() {
  return ( 
    <div className='bg-[#5cdb95] w-full h-140 relative top-470 flex items-center justify-center'>
        <div className='absolute top-10 '>
          <Heading title='WHY CHOSE QUOTRADE?' size='text-5xl'/>
        </div>
        <div className={`${roboto.className} hero-subheading mt-8 mb-5 mx-4 absolute top-18`}>
          <h3 className={`${roboto.className} text-2xl font-normal tracking-wider`}>Your complete platform to invest, trade, and grow your wealth</h3>
        </div>
        <div className={`${roboto.className} hero-subheading mt-8 mb-5 mx-4 absolute top-26`}>
          <h3 className={`${roboto.className} text-2xl font-normal tracking-wider`}>all from one intuitive dashboard.</h3>
        </div>
        <div className='flex flex-col items-center justify-center gap-x-10'>
          <div className="hero-image absolute top-50 left-23 ml-15">
              <Image
                src="/live-stock-market-icon.png"
                alt="live-market-quotes"
                width={150}
                height={100}
                quality={100} // Max quality
                sizes="(max-width: 768px) 100vw, 550px" // Responsive
                priority 
                  />
                  <h3 className='font-bold mt-4 text-xl text-center'>Live Market<br/> Quotes</h3>
                  <p className='text-lg text-normal mt-2 text-center'>Get real-time stock<br/> prices with no delays</p>
                </div>
          <div className="hero-image absolute top-50 left-110 ">
              <Image
                src="/light-fast-icon.png"
                alt="lighting-fast-execution"
                width={150}
                height={100}
                quality={100} // Max quality
                sizes="(max-width: 768px) 100vw, 550px" // Responsive
                priority 
                  />
                  <h3 className='font-bold mt-4 text-xl text-center'>Lightning-Fast<br/> Execution</h3>
                  <p className='text-lg text-normal mt-2 text-center'>Trade seamlessly<br/> with minimal latency</p>
                </div>
            <div className="hero-image absolute top-50 right-115">
              <Image
                src="/security-icon.png"
                alt="lighting-fast-execution"
                width={150}
                height={100}
                quality={100} // Max quality
                sizes="(max-width: 768px) 100vw, 550px" // Responsive
                priority 
                  />
                  <h3 className='font-bold mt-4 text-xl text-center'>Secure &<br/> Reliable</h3>
                  <p className='text-lg text-normal mt-2 text-center'>Built with modern<br/> security encryption</p>
             </div>
             <div className="hero-image absolute top-50 right-30 mr-10">
              <Image
                src="/mobile-icon.png"
                alt="lighting-fast-execution"
                width={150}
                height={100}
                quality={100} // Max quality
                sizes="(max-width: 768px) 100vw, 550px" // Responsive
                priority 
                  />
                  <h3 className='font-bold mt-4 text-xl text-center'>Responsive <br/>& Accessible</h3>
                  <p className='text-lg text-normal mt-2 text-center'>Trade from anywhere,<br/> on any device</p>
                </div>
        </div>
        
    </div>
  );
}

export default FiveHomeHero;