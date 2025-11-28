import React from 'react';
import { Roboto } from 'next/font/google';
import Heading from '@/components/Heading';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function Journey() {
  return ( 
  <div className='w-full h-130 relative top-65 bg-[#5cdb95] flex justify-center'>
    <div>
      <div className='text-center py-8'>
    <Heading title={'OUR JOURNEY'} size={'text-4xl'}  /> </div>
    <div className={`${roboto.className} font-normal text-xl px-10 space-y-4`}>
    <p className={`${roboto.className} px-10 font-normal text-xl `}>We pioneered a quote-based trading experience in India that blends simplicity with powerpx-10ful technology. Quotrade was launched with a clear goal: to remove every barrier faced by retail investors from high fees to complex platforms and lack of support.</p>
      <p className='px-10'>
      We kick-started operations on <strong>15th August, 2025</strong> with a vision to democratize access to trading tools and financial data. The name <strong>Quotrade</strong> reflects our core — trading empowered by live quotes, analytics, and education.
      </p>
      <p className='px-10'>
      Today, with our in-house tools and fair pricing, we’re shaping how modern traders interact with markets. Our ecosystem now supports thousands of daily users who rely on Quotrade for accurate market data, portfolio insights, and a seamless trading experience.
      </p>
      <p className='px-10'>
      We are more than just a platform. We’re building a <strong>Community</strong> — one that thrives on knowledge, transparency, and innovation. Through educational initiatives and open-source tools, we aim to empower the next generation of Indian traders.
      </p>
      <p className='px-10'>
      And this is just the beginning. Whether it’s building AI-driven insights, expanding to new markets, or supporting fintech innovations, we’re always working on something new. Stay tuned with our updates, or reach out to learn more about how Quotrade is redefining trading in India.
      </p>
    
    </div>
  </div>

  </div> );
}

export default Journey;