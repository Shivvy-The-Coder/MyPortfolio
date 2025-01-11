import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IDES from './Components/IDES';

const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:150,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <IDES/>
    </div>
  )
}

export default App;