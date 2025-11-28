import React from 'react';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function AccountCharges() {
  return ( 
    <div className='relative top-290 flex justify-center'>
      <div>
        <h1 className={` ${roboto.className} absolute -top-0 left-50 text-3xl font-bold z-10`}>Charges For Account Opening</h1>
      </div>
      <div className='absolute left-50 top-20'>
        <table className='bg-[#f5f6fa] w-[60rem] h-[10rem] border-collapse border border-gray-300'>
        
        <thead>
          <tr className='border-collapse border border-gray-300'>
            <th className='px-4 py-5 text-left text-xl '>Type of account</th>
            <th className='px-60 py-5 text-left text-xl absolute -right-40'> Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>Online account</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-35'>FREE</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>Offline account</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-35'>FREE</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>NRI account (offline only)</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-35'>₹ 500</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>Partnership, LLP, HUE, or Corporate accounts (offline only)</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-35'>₹ 500</td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default AccountCharges;