// import React from 'react'
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Skills from './Components/Skills/Skills';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import IDES from './Components/IDES/IDES';
// import Form from './Components/Form/Form';
// import Projects from './Components/Projects/Projects';
// import Myself from './Components/Myself/Myself';

// const App = () => {
//   React.useEffect(()=>{
//     AOS.init({
//       offset:150,
//       duration:800,
//       easing:"ease-in-sine",
//       delay:100,
//     });
//     AOS.refresh();
//   },[]);
   
//   return (
//   <div>

//     <Myself />
//     <Hero />
//     <Skills />
//     <IDES />
//     <Form />
//     <Projects />
  
//    </div>

//   )
// }

// export default App;


import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IDES from './Components/IDES/IDES';
import Form from './Components/Form/Form';
import Projects from './Components/Projects/Projects';
import Myself from './Components/Myself/Myself';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>

      <Navbar/>
      <Myself />
      <Hero />
      <Skills />
      <IDES />
      <Form />
      <Projects />

    </>
  );
};

export default App;
