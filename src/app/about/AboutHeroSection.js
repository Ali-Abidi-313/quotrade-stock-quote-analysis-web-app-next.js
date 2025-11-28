import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function FirstHeroSection() {
  return ( 
  <div>
    <div className='relative flex justify-center top-20 m-auto '>
      <Image src='/logo-name.png' alt='logo-name' width={250} height={200}  quality={100} priority/>
    </div>
          <p className={`${roboto.className} text-xl relative font-normal top-28 leading-relaxed text-center max-w-3xl mx-auto`}>
          Quotrade is a modern platform dedicated to empowering individuals with real-time stock quotes,
          financial insights, and user-friendly tools to make informed investment decisions.
          Our mission is to bridge the gap between expert-level data and everyday users through simplicity,
          accuracy, and speed.
        </p>
        <div className='flex justify-center'>
        <div className=" grid relative top-42 grid-cols-1 lg:grid-cols-3 gap-20 text-center ">
          <div className="p-4 border bg-[#f5f6fa] w-72 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Vision</h3>
            <p>
              To become the most trusted quote-based investment platform for traders and learners worldwide.
            </p>
          </div>

          <div className="p-4 border rounded-lg w-72 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">💡 Mission</h3>
            <p>
              Making stock market data accessible, understandable, and actionable for everyone.
            </p>
          </div>

          <div className="p-4 border rounded-lg w-72 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🤝 Values</h3>
            <p>
              Transparency, Simplicity, Innovation, and Community Empowerment.
            </p>
          </div>
        </div>
        </div>

  </div> 
  );
}

export default FirstHeroSection;