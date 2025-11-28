import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function DemateAMC() {
  return (
    <div className='relative top-400'>
      <div>
        <h1 className={` ${roboto.className} absolute -top-0 left-50 text-3xl font-bold z-10`}>Demat AMC (Annual Maintenance Charge)</h1>
      </div>
      <div className='absolute left-50 top-20'> 
        <table className='bg-[#f5f6fa] w-[60rem] h-[10rem] border-collapse border border-gray-300' >
          <thead>
            <tr className='border-collapse border border-gray-300'>
              <th className='px-4 py-5 text-left text-xl '>Value of holding</th>
              <th className='px-60 py-5 text-left text-xl absolute right-15'>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className='px-4 py-3 text-left text-lg'>Up to ₹ 4 Lakh</td>
            <td className='px-60 py-3 text-left text-lg absolute right-15'>FREE</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>₹ 4 Lakh - ₹ 10 Lakh</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-40'>₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td className='px-4 py-3 text-left text-lg'>Above ₹ 10 Lakh</td>
            <td className='px-60 py-3 text-left text-lg absolute -right-38'>₹ 300 per year, charged quarterly</td>
          </tr>
          </tbody>
        </table>
        <div className='absolute -bottom-15'>
          <p className='text-sm'>*Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).  BSDA account holders cannot hold more than one demat account. </p>
        </div>
      </div>

    </div>
  );
}

export default DemateAMC;