import React from 'react';
import CalcCard from './CalcCard';
function Commodities() {
  return (  
    <div>
      <div className='grid md:grid-col-2 my-4 mx-4 gap-x-4'>
        <CalcCard tittle={"Commodities"} segment={"commodity"} subtype={"futures"} stbuy={110} stsell={112} stquantity={1} stexch={"GOLD"}/>
        <CalcCard tittle={"Commodities"} segment={"commodity"} subtype={"options"} stbuy={310} stsell={315} stquantity={1} stexch={"GOLD"}/>
      </div>
    </div>
  );
}

export default Commodities;