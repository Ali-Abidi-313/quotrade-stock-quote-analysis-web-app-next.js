import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function Footer({ pos }) {
  return ( 
    <div className={`flex flex-col relative ${pos}`}>
      <hr className='border-t border-gray-400 opacity-50 my-4'/>
      <div className='list flex flex-row gap-x-15'>
        <div className='image-icon relative flex flex-col'>
          <div className='image absolute top-6 left-17'>
            <Image
            src='/logo-name.png'
            alt='logo-name'
            width={200}
            height={100}
            quality={100}
            priority/>
            <h4 className={`${roboto?.className || " "} font-normal text-lg mx-4 my-4 opacity-80`}>QuoTrade Broking Ltd. <br/> All rights reserved.</h4>
          </div>
          <div className='icon absolute flex flex-row gap-x-8 top-45 left-20'>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-[#E1306C]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src='/X-logo.jpg' alt='tweeter-logo' width={32} height={30} quality={100} priority className='relative bottom-1'/>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-[#1877F2]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-[#0077B5]" />
              </a>       
          </div>
          <div className='relative top-52 mx-10 w-75'>
            <hr className='border-t border-gray-400 opacity-50 my-4'/>
          </div>
        </div>
        <div>
          <ul className='text-lg space-y-4 opacity-80 '>
            <h3 className='text-2xl font-bold my-6 opacity-97'>About</h3>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-100 '><a href="https://zerodha.com/open-account/" className=''>Open demat account</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-100'><a href="https://zerodha.com/open-account/minor/">Minor demat account</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/open-account/nri/">NRI demat account</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/commodities/">Commodity</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/dematerialise/">Dematerialisation</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/fund-transfer/#tab-deposit_funds">Fund transfer</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/fund-transfer/#tab-deposit_funds">MTF</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/refer/">Referral program</a></li>
          </ul>
        </div>
        <div>
          <ul className='text-lg space-y-4 opacity-80'>
            <h3 className='text-2xl font-bold my-6 opacity-97'>Support</h3>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/contact/">Contact us</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://support.zerodha.com/">Support portal</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha">How to file a complaint?</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets">Status of your complaint</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/marketintel/bulletin/">Bulletin</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/marketintel/circulars/">Circular</a></li>
            <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/z-connect/">Q-connect blog</a></li>
          </ul>
        </div>
        <div className=''>
          <ul className='text-lg space-y-4 opacity-80'>
          <h3 className='text-2xl font-bold my-6 opacity-97'>Company</h3>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/about/" className='no-underline'>About</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/about/philosophy/" className='no-underline'>Phiosophy</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/media/" className='no-underline'>Press & media</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://careers.zerodha.com/" className='no-underline'>Careers</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/cares/" className='no-underline'>QuoTrade cares</a></li> 
          </ul> 
        </div>
        <div>
          <ul className='text-lg space-y-4 opacity-80'>
          <h3 className='text-2xl font-bold my-6 opacity-97'>Quick Links</h3>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/ipo/">Upcoming IPOs</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/charges/#tab-equities">Brokerage charges</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/marketintel/holiday-calendar/">Market holidays</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/markets/calendar/">Economic calender</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/calculators/">Calculator</a></li>
          <li className='opacity-80 hover:opacity-100 hover:scale-105 transition-opacity duration-300'><a href="https://zerodha.com/markets/stocks/">Markets</a></li>
          </ul>
        </div>
      </div>
      <div className='text-sm opacity-70 mt-20 mr-20 ml-20 mb-8'>
        <p>QuoTrade Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. CDSL/NSDL depository services are provided through QuoTrade Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading is offered through QuoTrade Commodities Pvt. Ltd. with MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238. The registered address is QuoTrade Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints related to securities broking, please write to <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds" className="text-blue-700 opacity-100">complaints@quotrade.com</a>, for DP-related queries, write to <a href="" className='text-blue-700 opacity-100'>dp@quotrade.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI and the Investor Charter Framework (ICF).
        <br/>
        To file a complaint on <a href="https://scores.sebi.gov.in/" className='text-blue-700 opacity-100' >SEBI SCORES</a>, register on the SCORES portal. The mandatory details required for filing complaints on SCORES include your Name, PAN, Address, Mobile Number, and Email ID. The SCORES platform ensures effective communication and speedy redressal of investor grievances.
        We follow a Smart Online Dispute Resolution process and are committed to a fair and transparent grievance redressal mechanism. Investments in the securities market are subject to market risks. Kindly read all the related documents carefully before investing.
        <br/>
        Attention investors: Stock brokers can accept securities as margin from clients only by way of pledge in the depository system with effect from September 01, 2020. Update your email ID and mobile number with your stock broker or depository participant to receive OTPs directly from the depository on your registered email and/or mobile number to create pledges. Check your securities, mutual funds, and bonds in the consolidated account statement issued by NSDL/CDSL every month.
        <br/>
        Prevent unauthorised transactions in your account. Keep your contact details updated with your stock broker. You will receive information about all your transactions directly from the Exchange via SMS or email at the end of each trading day. This is issued in the interest of investors. KYC is a one-time process while dealing in the securities market. Once KYC is completed through a SEBI-registered intermediary (broker, DP, mutual fund, etc.), there is no need to repeat the process when approaching another intermediary. <br/>
        Dear investor, if you are applying for an IPO, there is no need to issue a physical cheque. Simply write your bank account number and sign the IPO application form to authorize your bank to make the payment in case of allotment. In the event of non-allocation, the funds will remain safely in your bank account. <br/>
        As a responsible financial platform, QuoTrade does not provide stock tips or advisory services and has not authorized any individual or entity to trade on behalf of clients. If you come across anyone claiming to represent QuoTrade while offering such services, please report it immediately by raising a ticket through our official support channel. <br/></p>
      </div>
    </div>
   );
}
Footer.defaultProps = {
pos:'-bottom-500'
};

export default Footer;