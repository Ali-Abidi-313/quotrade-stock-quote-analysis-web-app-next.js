"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useState } from 'react';
import { Roboto } from 'next/font/google';
import LayoutInput from "./LayoutInput";
import ComputeValues from "./ComputeValues";

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function formatINR(n) {
  return n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function CalcCard({tittle , segment , subtype , stsell , stbuy , stquantity , stexch}) {
  const [sell , setSell] = useState(stsell);
  const [buy , setBuy] = useState(stbuy);
  const [quantity , setQuantity] = useState(stquantity);
  const [exch , setExch] = useState(stexch);

  const result = useMemo(() => ComputeValues({segment , subtype , sell , buy , quantity}),[segment , subtype , sell , buy, quantity ]);
  return (  
    <motion.div 
    initial={{opacity:0 , y:12}}
    animate={{opacity:1 , y:0}}
    transition={{duration: 0.35}}
    className="rounded-2xl border bg-[#f5f6fa] backdrop-blur shadow hover:shadow-lg transition-shadow ">
      <div className="p-5 border-b bg-gradient-to-br from-white to-slate-50 rounded-t-2xl flex flex-col">
        <div className={`${roboto.className}text-sm text-slate-500`}>{segment.charAt(0).toUpperCase()+segment.slice(1)} • {subtype.charAt(0).toUpperCase()+subtype.slice(1)}</div>
        <div className={`${roboto.className}text-lg text-bold`}>{tittle}</div>
      </div>
      <div className="p-4 border grid grid-col-2 gap-4">
        <LayoutInput label={"Buy"} value={buy} onChange={setBuy}/>
        <LayoutInput label={"Sell"} value={sell} onChange={setSell}/>
        <LayoutInput label={"Quantity"} value={quantity} onChange={setQuantity}/>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Exchange</label>
          <select value={exch} onChange={(e) => setExch(e.target.value)} className="p-2 border rounded-lg">
            <option>NSE</option>
            <option>BSE</option>
          </select>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-3 border grid grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
        <Stat label="Brokerage" value={`₹${formatINR(result.brokerage)}`} />
          <Stat label="STT/CTT" value={`₹${formatINR(result.stt + (result.ctt || 0))}`} />
          <Stat label="Txn Charges" value={`₹${formatINR(result.txn)}`} />
          <Stat label="GST" value={`₹${formatINR(result.gst)}`} />
          <Stat label="SEBI" value={`₹${formatINR(result.sebi)}`} />
          <Stat label="Stamp" value={`₹${formatINR(result.stamp)}`}/>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div className="flex flex-col">
          <div className="text-xs text-slate-500">Total charges</div>
          <div className="text-lg font-bold">{`₹${formatINR(result.total)}`}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500">Net</div>
          <div className={` text-lg font-bold ${(result.pnl > 0 ? text-emerald-600: text-rose-600)}`}>{(result.pnl >= 0 ? "+" : "-")}₹{formatINR(result.pnl)}</div>
        </div>
      </div>
      <div className="p-5 border-t flex gap-3">
        <button className="px-4 py-2 rounded-lg border font-medium text-slate-700 hover:bg-slate-50">Contract note</button>
        <button className="ml-auto px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Save</button>
      </div>

    </motion.div>
  );
}

export default CalcCard;