import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})
function ChargesExplained() {
  return ( 
    <div className='relative top-610  flex'>
      <div className='heading '>
        <h1 className={` ${roboto.className} absolute -top-0 left-50 text-3xl font-bold z-10`}>Charges Explained</h1>
      </div>
      <div className='charges flex relative top-20 left-50 gap-x-20'>
        <div className='left-charges'>
          <h1 className='text-lg'>Securities/Commodities transaction tax</h1>
          <p className='my-6 text-xs'>Tax by the government when transacting on the exchanges. Charged as above<br/> on both buy and sell sides when trading equity delivery. Charged only on selling<br/> side when trading intraday or on F&O.</p>
          <p className='my-6 text-xs'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/> Important to keep a tab.</p>
          <h1 className='text-lg'>Transaction / Turnover Charges</h1>
          <p className='my-6 text-xs'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p className='my-6 text-xs'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000<br/>  per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group <br/>X w.e.f 01.12.2017)</p>
          <p className='my-6 text-xs'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 <br/>per crore of gross turnover. </p>
          <p className='my-6 text-xs'>BSE has revised transaction charges for group A, B and other non exclusive scrips<br/>(non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹ 375 per crore <br/>basis w.e.f. December 1, 2022. </p>
          <p className='my-6 text-xs'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore <br/>of turnover on flat rate of gross turnover. </p>
          <h1 className='text-lg'>Call & trade</h1>
          <p className='my-6 text-xs'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha<br/>including auto square off orders. </p>
          <h1 className='text-lg'>Stamp charges</h1>
          <p className='my-6 text-xs'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for<br/>transacting in instruments on the stock exchanges and depositories.</p>
          <h1 className='text-lg'>NRI brokerage charges</h1>
          <ul className='my-6'>
            <li className='my-3 text-xs'># ₹100 per order for futures and options.</li>
            <li className='my-3 text-xs'># For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li className='my-3 text-xs'># For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li className='my-3 text-xs'># ₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
          </ul>
          <h1 className='text-lg'>Account with debit balance</h1>
          <p className='my-6 text-xs'>If the account is in debit balance, any order placed will be charged ₹40 per executed<br/> order instead of ₹20 per executed order.</p>
          <h1 className='text-lg'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h1>
          <ul className='my-6'>
            <li className='my-3 text-xs'># Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li className='my-3 text-xs'>#  Options - ₹50 per crore + GST traded value (premium value).</li>
            <li className='my-3 text-xs'># Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of<br/>premium for Options.</li>
            
          </ul>
          <h1 className='text-lg'>Margin Trading Facility (MTF)</h1>
          <ul className='my-6'>
            <li className='my-3 text-xs'># MTF Interest: 0.04% per day (₹40 per lakh) on the funded <br/>  <nbsp/> amount. The interest is applied</li>
            <li className='my-3 text-xs'>#  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
            <li className='my-3 text-xs'># MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>  
          </ul>
        </div>
        <div className='right-charges'>
          <h1 className='text-lg'>GST</h1>
          <p className='my-6 text-xs'>Tax levied by the government on the services rendered. 18% of ( brokerage <br/>+ SEBI charges + transaction charges)</p>
          <h1 className='text-lg'>SEBI Charges</h1>
          <p className='my-6 text-xs'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India <br/> for regulating the markets.</p>
          <h1 className='text-lg'>DP (Depository participant) charges</h1>
          <p className='my-6 text-xs'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged <br/>  on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p className='my-6 text-xs'>Female demat account holders (as first holder) will enjoy a discount of <br/>₹0.25 per transaction on the CDSL fee.</p>
          <p className='my-6 text-xs'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 <br/>on the CDSL fee.</p>
          <h1 className='text-lg'>Pledging charges</h1>
          <p className='my-6 text-xs'>₹30 + GST per pledge request per ISIN.</p>
          <h1 className='text-lg'>AMC (Account maintenance charges)</h1>
          <p className='my-6 text-xs'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.<br/> To learn more about BSDA, <a href='#'>Click here</a></p>
          <p className='my-6 text-xs'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).<br/> To learn more about AMC,<a href='#'>Click here</a></p>
          <h1 className='text-lg'>Corporate action order charges</h1>
          <p className='my-6 text-xs'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting <br/>orders placed through Console.</p>
          <h1 className='text-lg'>Off-market transfer charges</h1>
          <p className='my-6 text-xs'>₹25 per transaction.</p>
          <h1 className='text-lg'>Physical CMR request</h1>
          <p className='my-6 text-xs'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST <br/>for subsequent requests.</p>
          <h1 className='text-lg'>Payment gateway charges</h1>
          <p className='my-6 text-xs'>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h1 className='text-lg'>Delayed Payment Charges</h1>
          <p className='my-6 text-xs'>Interest is levied at 18% a year or 0.05% per day on the debit balance <br/> in your trading account. <a href='#'>Learn more.</a></p>
          <h1 className='text-lg'>Trading using 3-in-1 account with block functionality</h1>
          <ul className='my-6'>
            <li className='my-3 text-xs'># Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li className='my-3 text-xs'>#  Intraday Brokerage: 0.05% per executed order.</li>  
          </ul>
        </div>
      </div>
      <div className='discleamer absolute -bottom-60 left-50'>
          <h1 className='text-lg '>Disclaimer</h1>
          <p className={`${roboto.className} mt-4 text-xs`}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. <br/>
            Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised,<br/>
              and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less)<br/>
              as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts,<br/>  a brokerage of 0.1% will be charged.
          </p>


        </div>
      
    </div>
  );
}

export default ChargesExplained;