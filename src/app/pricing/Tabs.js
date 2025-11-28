import React from 'react';
function Tabs({current , setchange}) {
  const item = [
    {id:"equities" , lable:"Equities" },
    {id:"fo" , lable:"F&O"},
    {id:"currency" , label:"Currency"},
    {id:"commodities" , label:"Commodities"},
  ];
  return (  
    <div className="flex gap-2 overflow-auto pb-2">
      {item.map((t) => (
        <button 
        key={t.id}
        onClick={() => setchange(t.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${ current === t.id ? "bg-[#5cdb95] shadow" : "bg-[#bfbdbd]"}`}>
          {t.lable}
        </button>
      )) }
    </div>
  );
}

export default Tabs;