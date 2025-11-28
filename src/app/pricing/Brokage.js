import React, { useState } from 'react';
function Brokerage({equitytable , currencytable , commoditytable}) {
    const [tab , setTab] = useState("equity");
  

  return ( 

    <div className='relative'>
      <div className='absolute left-75 top-90 flex flex-row gap-x-20 justify-center  '>
        {["equity" , "currency" ,"commodity"].map((item) => (
          <button 
          key={item}
          onClick={() => setTab(item)} 
          className={`px-6 py-2 rounded-full w-[12.5rem] h-[2.5rem] text-xl font-medium bg-grey-600 ${tab === item ? "bg-[#5cdb95]" : "bg-[#bfbdbd]"}`}>
            {(item.charAt(0).toUpperCase())+item.slice(1)}
          </button>
        ))};
      </div>
      <div className='absolute top-100 left-50 flex justify-center mt-20 bg-grey-200'>
        {tab === "equity" && (
          <table className='text-left w-[60rem] h-[20rem] border-collapse border border-gray-300'>
             <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2  text-left"></th>
                <th className="px-4 py-2  text-left">Equity delivery</th>
                <th className="px-4 py-2  text-left">Equity intraday</th>
                <th className="px-4 py-2  text-left">F&O - Futures</th>
                <th className="px-4 py-2  text-left">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              {equitytable.map((item,index) => (
                <tr key={index}>
                  <td className='px-4 py-2  text-left'>{item.name.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2  text-left'>{item.delivery.split('\n').map((line , idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2  text-left'>{item.intraday.split('\n').map((line,index) => (
                    <span key={index}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2  text-left'>{item.futures.split('\n').map((line , idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2  text-left'>{item.options}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='absolute top-100 left-50 flex justify-center mt-20 bg-grey-200'>
        {tab === "currency" && (
          <table className='text-left w-[60rem] h-[10rem] border-collapse border border-gray-300'>
            <thead className="bg-gray-100">
              <tr>
                <th className='px-4 py-2 text-left'></th>
                <th className='px-4 py-2 text-left'>Currency futures</th>
                <th className='px-4 py-2 text-left'>Currency options</th>
              </tr>
            </thead>
            <tbody>
              {currencytable.map((item,index) => (
                <tr key={index}>
                  <td className='px-4 py-2 text-left'>{item.name.split('\n').map((line,idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2 text-left'>{item.futures.split('\n').map((line , idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}</td>
                  <td className='px-4 py-2 text-left'>{item.options.split('\n').map((line , idx) => (
                    <span key={idx}>{line}<br/></span>
                  ))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='absolute top-100 left-50 flex justify-center mt-20 bg-grey-200'>
        {tab === "commodity" && (<table className='text-left w-[60rem] h-[15rem] border-collapse border border-gray-300'>
          <thead>
            <tr>
              <th></th>
              <th className='px-4 py-2 text-left'>Commodity futures</th>
              <th className='px-4 py-2 text-left'>Commodity options</th>
            </tr>
          </thead>
          <tbody>
            {commoditytable.map((item,index) => (
              <tr key={index}>
                <td className='px-4 py-2 text-left'>{item.name.split('\n').map((line , idx) => (
                  <span key={idx}>{line}<br/></span>
                ))}</td>
                <td className='px-4 py-2 text-left'>{item.futures.split('\n').map((line , idx) =>(
                  <span key={idx}>{line}<br/></span>
                ))}</td>
                <td className='px-4 py-2 text-left'>{item.options.split('\n').map((line , idx) => (
                  <span key={idx}>{line}<br/></span>
                ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>

    </div>
  );
}

export default Brokerage;