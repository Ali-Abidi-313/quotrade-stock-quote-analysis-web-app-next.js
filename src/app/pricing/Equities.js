import React from 'react';
import CalcCard from './CalcCard';
function Equities() {
  return (  
    <div>
      <div className='grid md:grid-col-2 my-4 mx-4 gap-x-4 xl:grid-cols-2'>
        <CalcCard tittle={"Intraday Equity"} segment={"equities"} subtype={"intraday"} stsell={1000} stbuy={1100} stquantity={400} stexch={'NSE'}/>
        <CalcCard tittle={"Delivery Equity"} segment={"equities"} subtype={"delivery"}  stsell={1000} stbuy={1100} stquantity={400} stexch={'NSE'}/>
      </div>
    </div>
  );
}

export default Equities;