import React from 'react';
function Stat({label , value}) {
  return (  
    <div className='bg-[#f5f6a] rounded-lg border p-4 flex flex-col'>
      <div className='text-xs text-slate-500'>{label}</div>
      <div className='text-slate-800 font-semibold'>{value}</div>
    </div>
  );
}

export default Stat;