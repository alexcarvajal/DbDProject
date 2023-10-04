import { useState,useEffect } from 'react';
import Loading from './Components/Loading';
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import  BannerLogos  from './Components/BannerLogos';
import BannerKS from './Components/BannerKS';
 import IconsOfHorror from './Components/IconsOFHorror';
 import SliderGallery from './Components/SliderGallery/SliderGallery';
 function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  // Oculta el GIF después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
     <Navbar />
     <Hero />
     <BannerLogos />
       <BannerKS />
     {/* <Parallax /> */}
     <IconsOfHorror />
     <SliderGallery />
    </>
  )
}

export default App
