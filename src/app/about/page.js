
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FirstHeroSection from './AboutHeroSection';
import Journey from './AboutJourney';
import Creator from './AboutTeam';
function About() {
  return ( 
  <div className=" flex flex-col min-h-screen space-y-8">
    <Navbar/>
    <main className="flex-grow">
    <FirstHeroSection/>
    <Journey/>
    <Creator/>
    <Footer pos='-bottom-220'/>
    </main>
  </div> );
}

export default About;