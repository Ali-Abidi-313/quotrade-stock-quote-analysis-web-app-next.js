import React from 'react';
import CalcCard from './CalcCard';
function FO() {
  return (  
    <div>
      <div className='grid md:grid-col-2 mx-4 my-4'>
      <CalcCard tittle={"F&O - Futures"} segment={"F&O"} subtype={"Futures"} stsell={1100} stbuy={1000} stquantity={400} stexch={"NSE"}/>
      <CalcCard tittle={"F&O - Futures"} segment={"F&O"} subtype={"Options"} stsell={1100} stbuy={1000} stquantity={400} stexch={"NSE"}/>
    </div>
    </div>
  );
}

export default FO;