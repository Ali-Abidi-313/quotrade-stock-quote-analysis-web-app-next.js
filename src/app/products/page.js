'use client';
import Navbar from '@/components/Navbar';
import PricingOne from './PricingOne';
import { React , useEffect} from 'react';
import ImageContent from './ImageContent';
import ProductHeading from '../../components/ProductsHeading';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';

import AOS from 'aos';


function Pricing() {
  useEffect(() => {
      AOS.init({ duration: 1000 , once: false });
    }, []);
  return (  
    <div className='relative flex flex-col min-h-screen space-y-8 overflow-x-hidden'>
      <Navbar/>
      <ProductHeading data-aos="slide-down" product="Product"/>
      <main className='flex flex-col space-y-8'>
      <div className=''>
        <PricingOne tittle="Live Market Terminal" content={[ "QuoTrade’s Live Market Terminal gives you direct" ," access to real-time stock quotes, interactive charts,", " and instant market updates. It allows fast order placement ","and seamless trade execution, helping you stay on top of market"," movements and make smarter trading decisions with confidence."]} Btncontent="Explore Live Terminal" pos="left-30" toppos={"top-30"}/>
        <ImageContent src="/product-home-2.png" pos="right-20" toppos="top-50" className="custom-3d-move"/>
      </div>
      <div className='absolute flex flex-col'>
        <ImageContent src="/smart-prot.png" pos="left-30" toppos="top-150" className="custom-3d-move"/>
        <PricingOne tittle="Smart Portfolio Tracker" content={["QuoTrade’s Stock Portfolio Tracker helps you manage and", "monitor all your investments in one place. It provides real-time", "updates on stock performance, tracks gains and losses,", "and gives clear insights into your overall portfolio value"]} toppos={"top-160"} pos={"left-190"} Btncontent={"Manage Your Portfolio"}/>
      </div>
      <div className='relative flex flex-col'>
        <PricingOne tittle="Transparent Pricing" content={["QuoTrade ensures complete transparency in pricing ", " with no hidden charges or complex fee structures. ", " Every trade comes with clear, upfront costs so you always","  know what you’re paying. Our goal is to make investing, "," simple and trustworthy , giving you full confidence and ", "control over your financial decisions."]} Btncontent={"View Pricing Plans"} pos={"left-30"} toppos={"top-210"}/>
        <ImageContent src="/product-pricing-1.png" pos="right-25" toppos="top-200"/>
      </div>
      <div className='relative flex flex-col'>
        <ImageContent src="/last-prod.png" pos="left-20" toppos="top-260"/>
        <PricingOne
          tittle="Market Insights & Learning"
          content={[
            "QuoTrade’s Market Insights & Learning section equips you with " , "expert analysis, educational resources, and the latest market trends.",
            "Whether you’re a beginner or an experienced trader, you can access "," guides, tutorials, and real-time insights to sharpen your trading skills ","and make informed investment decisions with confidence."
          ]}
          Btncontent="Explore Insights"
          pos="left-185"
          toppos="top-270"
        />  
      </div>
      <div>
        <Footer pos="-bottom-330"/>
      </div>
      </main>
    </div>
  );
}

export default Pricing;