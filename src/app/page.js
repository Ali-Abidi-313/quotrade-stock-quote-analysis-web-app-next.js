
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Head from "next/head";
import SecondHomeHero from "@/components/SecondHomeHero";
import ThirdHomeHero from "@/components/ThirdHomeHero";
import FourthHomeHero from "@/components/FourthHomeHero";
import FiveHomeHero from "@/components/FiveHomeHero";


export default function Home() {
  return (
    <>
    <Head>
      
    </Head>
      <Navbar/> 
    
      <Herosection/>
      <SecondHomeHero/>
      <ThirdHomeHero/>
      <FourthHomeHero/>
      <FiveHomeHero/>
      <Footer pos="-bottom-500"/>
      {/* <Image 
        src="/pic1.png"  // path from the public folder
        alt="QuoTrade Logo"
        width={500}      // required
        height={500}     // required
      /> */}
    </>

  );
}
