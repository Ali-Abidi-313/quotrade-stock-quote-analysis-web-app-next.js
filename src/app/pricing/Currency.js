import React from 'react';
import CalcCard from './CalcCard';
function Currency() {
  return (  
    <div>
      <div className='grid md:grid-col-2 mx-8 my-6'>
        <CalcCard tittle={"Currency Futures"} segment={"Currency"} subtype={"Futures"} stbuy={49.2525} stsell={49.2527} stquantity={1} stexch={"NSE"}/> 
        <CalcCard tittle={"Currency Options"} segment={"Currency"} subtype={"Options"} stbuy={0.0625} stsell={0.0675} stquantity={1} stexch={"NSE"}/>
      </div>
    </div>
  );
}

export default Currency;