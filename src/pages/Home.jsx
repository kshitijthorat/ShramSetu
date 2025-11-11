import React from 'react'
import Cards from '../components/Cards'
import Scroll from '../components/Scroll';
import Footer from '../components/Footer'
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import BlurText from '../components/BlurText';
const workers = [
  { image: "/images/bg.png", title: "Plumber", info: "Expert in repairs" },
  { image: "/images/back_drop.jpg", title: "Carpenter", info: "Furniture & fittings" },
  { image: "/images/leader.jpg", title: "Electrician", info: "Wiring & installations" },
  { image: "/images/singal.jpg", title: "Painter", info: "Residential & commercial" },
];

const Home = () => {
  return (
    
    <div>
       <Navbar/>
    <div className='flex h-180 m-3 w-auto text-2xl pl-0 py-40 rounded-lg bg-white'>
      <div className="m-10 p-10 bg-cover bg-center">
       <BlurText 
        text="Connecting Skilled Workers with Opportunities"
        delay={150}
        animateBy="words"
        direction="top"
      className="text-[4rem] mb-8 text-[#0a66c2]"
       />
      <p className='text-left text-black'>A free platform where daily wage labourers, contractors, </p>
        <p className='text-left text-black'>and NGOs come together to showcase skills, find jobs, and build a better future.</p>
      </div>
        <div>
          <img src="/images/bg.png" alt="" />
        </div>
        </div>
     
    <div className='flex h-150 m-2 text-2xl text-black justify-center'>
    <Cards
        image="/images/singal.jpg"
        title="Single user"
        info="Experienced plumbers ready for residential and commercial work."/>
    <Cards
     image="/images/leader.jpg"
        title="Leader"
        info="Experienced plumbers ready for residential and commercial work."/>
    <Cards
     image="/images/NGO.png"
        title="NGO"
        info="Experienced plumbers ready for residential and commercial work."/>

  </div>
    <div className='m-3 p-2'>
      <div style={{ padding: "50px", background: "#f3f4f6" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Our Skilled Workers</h2>
      <Scroll items={workers} speed={0.5} />
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home