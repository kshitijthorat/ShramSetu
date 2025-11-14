import React from 'react'
import Cards from '../../components/Cards'
import Scroll from '../../components/Scroll';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import BlurText from '../../components/BlurText';

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
       
    <div className='flex h-180 m-3 w-auto text-2xl pl-0 py-40 rounded-lg bg-white shadow-xl'>
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
          <img src="/images/bg.png" alt="" className="rounded-2xl" />
        </div>
        </div>
     
    <div className='flex h-150 m-2 text-2xl justify-center'>
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
      <div className="p-12 bg-gray-100 rounded-3xl">
      <h2 className="text-center text-3xl mb-8 text-gray-800">Our Skilled Workers</h2>
      <Scroll items={workers} speed={0.5} />
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home