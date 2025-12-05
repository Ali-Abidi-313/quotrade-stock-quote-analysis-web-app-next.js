"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Quotrade – Full Brokerage Calculator (Single-file version)
 * ---------------------------------------------------------
 * ✔ Distinct UI (glass cards, soft gradients) – not like Zerodha
 * ✔ Tabs: Equities (Intraday, Delivery), F&O (Futures, Options), Currency, Commodities, MTF
 * ✔ Centralized charge rules per segment/subtype
 * ✔ useMemo for performance
 * ✔ Clean, reusable components
 *
 * NOTE: The rate constants below are set to commonly used values.
 * If you need to match Zerodha exactly, tweak CHARGE_TABLE in one place.
 */

// --------------------------------------
// 1) Charge rules (edit here to match broker exactly)
// --------------------------------------
const CHARGE_TABLE = {
  equities: {
    intraday: {
      brokerage: { type: "minPercentOrFlat", percent: 0.0003, flat: 20 }, // 0.03% or ₹20 per order
      stt: (i) => i.sell * i.qty * 0.00025, // 0.025% on sell side
      txn: (i) => (i.buy + i.sell) * i.qty * 0.0000345, // 0.00345%
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn, // GST on (brokerage + txn)
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001, // 0.0001%
      stamp: (i) => i.buy * i.qty * 0.00003, // 0.003% (intraday buy)
      deliveryBrokerageZero: false,
    },
    delivery: {
      brokerage: { type: "flat", flat: 0 }, // many brokers charge 0 for delivery
      stt: (i) => (i.buy * i.qty + i.sell * i.qty) * 0.001, // 0.1% on buy + sell
      txn: (i) => (i.buy + i.sell) * i.qty * 0.0000345,
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.00015, // 0.015%
      deliveryBrokerageZero: true,
    },
  },
  fo: {
    futures: {
      brokerage: { type: "minPercentOrFlat", percent: 0.0003, flat: 20 },
      stt: (i) => i.sell * i.qty * 0.0001, // 0.01% on sell
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000019, // ~0.0019%
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.00002, // 0.002%
    },
    options: {
      brokerage: { type: "flat", flat: 20 }, // per executed order
      stt: (i) => i.sell * i.qty * 0.0005, // 0.05% on sell
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000053, // ~0.0053%
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.00003,
    },
  },
  currency: {
    futures: {
      brokerage: { type: "minPercentOrFlat", percent: 0.0003, flat: 20 },
      stt: () => 0, // STT not applicable; CTT may apply for commodities only
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000009, // sample
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.000002,
    },
    options: {
      brokerage: { type: "flat", flat: 20 },
      stt: () => 0,
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000035,
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.000002,
    },
  },
  commodities: {
    futures: {
      brokerage: { type: "minPercentOrFlat", percent: 0.0003, flat: 20 },
      stt: () => 0,
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000026, // exchange dependent
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      // CTT for commodities futures
      stamp: (i) => i.buy * i.qty * 0.00001,
      ctt: (i) => i.sell * i.qty * 0.0001, // optional Commodity Transaction Tax
    },
    options: {
      brokerage: { type: "flat", flat: 20 },
      stt: () => 0,
      txn: (i) => (i.buy + i.sell) * i.qty * 0.000026,
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.00001,
      ctt: (i) => i.sell * i.qty * 0.00005,
    },
  },
  mtf: {
    delivery: {
      brokerage: { type: "flat", flat: 0 },
      stt: (i) => (i.buy * i.qty + i.sell * i.qty) * 0.001,
      txn: (i) => (i.buy + i.sell) * i.qty * 0.0000345,
      gstOn: (i, ctx) => ctx.brokerage + ctx.txn,
      gstRate: 0.18,
      sebi: (i) => (i.buy + i.sell) * i.qty * 0.000001,
      stamp: (i) => i.buy * i.qty * 0.00015,
    },
  },
};

// Helper to compute brokerage according to rule
function computeBrokerage(rule, turnover) {
  if (!rule) return 0;
  if (rule.type === "flat") return rule.flat;
  if (rule.type === "minPercentOrFlat") return Math.min(turnover * rule.percent, rule.flat);
  return 0;
}

function formatINR(n) {
  return n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Single calculation function for all segments/subtypes
function calculateCharges({ segment, subtype, buy, sell, qty }) {
  const rules = CHARGE_TABLE[segment][subtype];
  const turnover = (buy + sell) * qty;

  const ctx = {};
  ctx.brokerage = computeBrokerage(rules.brokerage, turnover);
  const stt = rules.stt ? rules.stt({ buy, sell, qty }) : 0;
  const txn = rules.txn ? rules.txn({ buy, sell, qty }) : 0;
  const sebi = rules.sebi ? rules.sebi({ buy, sell, qty }) : 0;
  const stamp = rules.stamp ? rules.stamp({ buy, sell, qty }) : 0;
  const ctt = rules.ctt ? rules.ctt({ buy, sell, qty }) : 0; // only commodities
  const gstBase = rules.gstOn ? rules.gstOn({ buy, sell, qty }, { brokerage: ctx.brokerage, txn }) : 0;
  const gst = (rules.gstRate || 0) * gstBase;
  const total = ctx.brokerage + stt + txn + gst + sebi + stamp + ctt;
  const pnl = (sell - buy) * qty - total;

  return { turnover, brokerage: ctx.brokerage, stt, txn, gst, sebi, stamp, ctt, total, pnl };
}

// --------------------------------------
// 2) UI Components
// --------------------------------------
export default function Tempcalc() {
  const [tab, setTab] = useState("equities"); // equities | fo | currency | commodities | mtf

  return (
    <div className=" relative top-280 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Tabs current={tab} onChange={setTab} />
        <AnimatePresence mode="wait">
          {tab === "equities" && <Equities key="equities" />}
          {tab === "fo" && <FO key="fo" />}
          {tab === "currency" && <Currency key="currency" />}
          {tab === "commodities" && <Commodities key="commodities" />}
          {tab === "mtf" && <MTF key="mtf" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-6">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-slate-800"
      >
        Quotrade Brokerage Calculator
      </motion.h1>
      <p className="text-slate-500 mt-1">Clean, fast & accurate. Unique UI; formulas centralized for easy control.</p>
    </div>
  );
}

function Tabs({ current, onChange }) {
  const items = [
    { id: "equities", label: "Equities" },
    { id: "fo", label: "F&O" },
    { id: "currency", label: "Currency" },
    { id: "commodities", label: "Commodities" },
    { id: "mtf", label: "MTF" },
  ];
  return (
    <div className="flex gap-2 overflow-auto pb-2">
      {items.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
            ${current === t.id ? "bg-[#5cdb95] text-white border-[#5cdb95] shadow" : "bg-white text-slate-700"}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

// ---- Panels ----
function Equities() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <CalcCard title="Intraday Equity" segment="equities" subtype="intraday" />
      <CalcCard title="Delivery Equity" segment="equities" subtype="delivery" />
      <CalcCard title="F&O – Futures (Equity)" segment="fo" subtype="futures" />
      <CalcCard title="F&O – Options (Equity)" segment="fo" subtype="options" />
    </motion.div>
  );
}

function FO() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <CalcCard title="Equity Futures" segment="fo" subtype="futures" />
      <CalcCard title="Equity Options" segment="fo" subtype="options" />
    </motion.div>
  );
}

function Currency() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid md:grid-cols-2 gap-6">
      <CalcCard title="Currency Futures" segment="currency" subtype="futures" />
      <CalcCard title="Currency Options" segment="currency" subtype="options" />
    </motion.div>
  );
}

function Commodities() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid md:grid-cols-2 gap-6">
      <CalcCard title="Commodity Futures" segment="commodities" subtype="futures" />
      <CalcCard title="Commodity Options" segment="commodities" subtype="options" />
    </motion.div>
  );
}

function MTF() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid grid-cols-1 gap-6">
      <CalcCard title="MTF (Delivery)" segment="mtf" subtype="delivery" />
    </motion.div>
  );
}

// The main card component
function CalcCard({ title, segment, subtype }) {
  const [buy, setBuy] = useState(100);
  const [sell, setSell] = useState(105);
  const [qty, setQty] = useState(100);
  const [exch, setExch] = useState("NSE");

  const result = useMemo(
    () => calculateCharges({ segment, subtype, buy, sell, qty }),
    [segment, subtype, buy, sell, qty]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border bg-white/80 backdrop-blur shadow hover:shadow-lg transition-shadow"
    >
      <div className="p-5 border-b bg-gradient-to-br from-white to-slate-50 rounded-t-2xl">
        <div className="text-sm text-slate-500">{segment.toUpperCase()} • {subtype.toUpperCase()}</div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>

      <div className="p-5 grid grid-cols-2 gap-3">
        <LabeledInput label="Buy" value={buy} onChange={setBuy} />
        <LabeledInput label="Sell" value={sell} onChange={setSell} />
        <LabeledInput label="Qty" value={qty} onChange={setQty} />
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-500">Exchange</label>
          <select value={exch} onChange={(e) => setExch(e.target.value)} className="p-2 border rounded-lg">
            <option>NSE</option>
            <option>BSE</option>
          </select>
        </div>
      </div>

      <div className="px-5">
        <div className="rounded-xl bg-slate-50 p-3 border grid grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Stat label="Brokerage" value={`₹${formatINR(result.brokerage)}`} />
          <Stat label="STT/CTT" value={`₹${formatINR(result.stt + (result.ctt || 0))}`} />
          <Stat label="Txn Charges" value={`₹${formatINR(result.txn)}`} />
          <Stat label="GST" value={`₹${formatINR(result.gst)}`} />
          <Stat label="SEBI" value={`₹${formatINR(result.sebi)}`} />
          <Stat label="Stamp" value={`₹${formatINR(result.stamp)}`} />
        </div>

        <div className="flex items-end justify-between mt-4">
          <div>
            <div className="text-xs text-slate-500">Total charges</div>
            <div className="text-xl font-semibold">₹{formatINR(result.total)}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Net P&L</div>
            <div className={`text-2xl font-extrabold ${result.pnl >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
              {result.pnl >= 0 ? "+" : ""}₹{formatINR(result.pnl)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LabeledInput({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-slate-500">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        className="p-2 border rounded-lg"
      />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-lg border p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-slate-800 font-semibold">{value}</div>
    </div>
  );
}
