import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function OptionalCharges() {
  return ( 
    <div className='relative top-510'>
      <div>
        <h1 className={` ${roboto.className} absolute -top-0 left-50 text-3xl font-bold z-10`}>Demat AMC (Annual Maintenance Charge)</h1>
      </div>
      <div className='absolute left-50 top-20'> 
        <table className='bg-[#f5f6fa] w-[60rem] h-[10rem] border-collapse border border-gray-300' >
          <thead>
            <tr className='border-collapse border border-gray-300'>
              <th className='px-4 py-5 text-left text-xl '>Service</th>
              <th className='px-6 py-5 text-left text-xl absolute right-100'>Billing Frequency</th>
              <th className='px-6 py-5 text-left text-xl absolute right-45'>Charges</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className='px-4 py-3 text-left text-lg'>Up to ₹ 4 Lakh</td>
            <td className='px-6 py-3 text-left text-lg absolute right-107'>Monthly / Annual</td>
            <td className='px-6 py-3 text-left text-lg absolute right-17'>FREE: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>₹ 4 Lakh - ₹ 10 Lakh</td>
            <td className='px-6 py-3 text-left text-lg absolute right-110'>Pre transaction</td>
            <td className='px-6 py-3 text-left text-lg absolute right-0'>Buy & Invest More: 100 | SIP: 10</td>
            
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>Above ₹ 10 Lakh</td>
            <td className='px-6 py-3 text-left text-lg absolute right-125'>Monthly</td>
            <td className='px-6 py-3 text-left text-lg absolute right-10'>FREE: 500 | Personal: Free</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OptionalCharges;