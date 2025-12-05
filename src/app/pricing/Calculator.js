import React, { useState } from 'react'
import IntradayEquityCalc from './IntradayEquityCalc';
import DeliveryEquityCalc from './DeliveryEquityCalc';
import FutureFOCalc from './FutureFOCalc';
import OptionsFOCalc from './OptionsFOCalc';

function Calculator() {
  const [tab , setTab] = useState("equities");
  const options = ["equities" , "F&O" , "currency" , "commodities" , "MTF"];
  return (
    <div className='relative'>
      <div className='absolute flex top-[31.5rem] '>
        {options.map((item) => (
          <button
          key={item}
          onClick={() => setTab(item)}
          className={`px-6 py-2 rounded-full w-[10rem] h-[2.5rem]  md:items-center mx-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xl font-medium bg-grey-600 ${
            tab === item ? "bg-[#5cdb95]" : "bg-[#bfbdbd]" }`}>
              {item.charAt(0).toUpperCase()+item.slice(1)}
          </button>
        ))}
      </div>
      <div>
        {(tab === "equities") && (
          <div>
            <IntradayEquityCalc/>
            <DeliveryEquityCalc/>
          </div>
        )}
      </div>
      <div>
        {tab === "F&O" && (
          <div>
            <FutureFOCalc/>
            <OptionsFOCalc/>
          </div>
        )}
      </div>
      <div>
        {tab === "currency" && (
          <div>
            
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Calculator
