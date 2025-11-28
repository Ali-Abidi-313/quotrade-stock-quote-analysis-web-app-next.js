import React from 'react';
function LayoutInput({label , value, onChange }) {
  return (  
    <div className="flex flex-col gap-1">
      <label className="text-xs text-slate-500">{label}</label>
      <input type='number' value={value} onChange={(e) => onChange(Number(e.target.value || 0))}
      className="p-2 border rounded-lg"/>

    </div>
  );
}

export default LayoutInput;