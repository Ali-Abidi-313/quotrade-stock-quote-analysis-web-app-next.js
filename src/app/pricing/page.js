'use client';
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from './HeroSection';
import ProductHeading from '@/components/ProductsHeading';
import 'aos/dist/aos.css';
import '@/app/globals.css'; // Ensure global styles are imported
import AOS from 'aos';
import Brokerage from './Brokage';
import AccountCharges from './AccountCharges';
import DemateAMC from './DematAMC';
import OptionalCharges from './OptionalCharges';
import ChargesExplained from './ChargesExplained';
import Footer from '@/components/Footer';
import BrokerageCalculator from './BrokerageCalculator';
import Tempcalc from './temp';
import CalculatorTable from './Calculator';

function PricingHome() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });  }, []);
  return ( 
    <div>
      <Navbar/>
      <ProductHeading data-aos="slide-down" product="Pricing"/>
      <Hero/>
      <Brokerage 
      equitytable={[{name:"Brokerage" , delivery:"Zero Brokerage", intraday:"0.03% or Rs. 20/Executed order whichever is lower", futures:"0.03% or Rs. 20/Executed order whichever is lower", options:"Flat Rs. 20 per executes order" },{name:"STT/CTT" , delivery:"0.1% on buy & sell", intraday:"0.025% on the sell side", futures:"0.02% on the sell side", options:"0.125% of the intrinsic value on options that are bought and exercised" },{name:"Transcation \n charges" , delivery:"NSE: 0.00297% \n BSE:0.00375%", intraday:"NSE: 0.00297% \n BSE:0.00375%", futures:"NSE: 0.00173% \n BSE: 0", options:"NSE: 0.00297%(on premium) \n BSE:0.00375%(on premium" },{name:"GST" , delivery:"18% on (brokerage + SEBI \n charges + transaction \n charges)", intraday:"18% on (brokerage + SEBI \n charges + transaction \n charges)", futures:"18% on (brokerage + SEBI \n charges + transaction \n charges)", options:"18% on (brokerage + SEBI \n charges + transaction \n charges)" },{name:"SEBI charges" , delivery:"₹10 / crore", intraday:"₹10 / crore", futures:"₹10 / crore", options:"₹10 / crore" },{name:"Stamp charges" , delivery:"0.015% or ₹1500 / crore on \n buy side", intraday:"0.003% or ₹300 / crore on \n buy side", futures:"0.002% or ₹200 / crore on \n buy side", options:"0.003% or ₹300 / crore on \n buy side" }]}
      currencytable={[{name:"Brokerage" , futures:"0.03% or ₹20/executed order whichever is lower" , options:"₹20/executed order"} ,{name:"STT/CTT" , futures:"No STT" , options:"No STT"} ,{name:"Transcation \n charges", futures:"NSE: 0.00035% \n BSE: 0.00045%", options:"NSE: 0.00311% \n BSE:0.001%"},{name:"GST" , futures:"18% on (brokerage + SEBI \n charges + transaction \n charges)", options:"18% on (brokerage + SEBI \n charges + transaction \n charges)" } , {name:"SEBI charges",futures:"₹10 / crore", options:"₹10 / crore"},{name:"Stamp charges" ,futures:"0.001% or ₹100 / crore on \n buy side", options:"0.001% or ₹10 / crore on \n buy side"} ]}
      commoditytable={[{name:"Brokerage" , futures:"0.03% or ₹20/executed order whichever is lower" , options:"₹20/executed order"}, {name:"STT/CTT" , futures:"0.01% on sell side(Non-Agri)" , options:"0.05% on sell side"}, {name:"Transaction \n charges" , futures:"MCX: 0.0021% \n NSE: 0.0001%" , options:"MCX: 0.0418% \n NSE: 0.0001%"}, {name:"GST" , futures:"18% on (brokerage + SEBI \n charges + transaction \n charges)", options:"18% on (brokerage + SEBI \n charges + transaction \n charges)" },{name:"SEBI charges",futures:"Agri: \n ₹1 / crore \n Non-Agri: \n ₹10 / crore", options:"₹10 / crore"}, {name:"Stamp charges" ,futures:"0.002% or ₹200 / crore on \n buy side", options:"0.003% or ₹300 / crore on \n buy side"}]}/>
      <Tempcalc/>
      {/* <CalculatorTable/> */}
      <AccountCharges/>
      <DemateAMC/>
      <OptionalCharges/>
      <ChargesExplained/>
      <Footer pos={"-bottom-700"}/>
    </div>

  );
}

export default PricingHome;