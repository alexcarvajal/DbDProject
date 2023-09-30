import { useState,useEffect } from 'react';
import './styles.css'; // Importa los estilos CSS

function Navbar() {
 
  const [logoHeight, setLogoHeight] = useState(100); // Altura inicial del logo

  useEffect(() => {
    const handleScroll = () => {
      let newHeight = 100 - window.scrollY / 10; 
      if (newHeight < 50) newHeight = 50; 
      setLogoHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Logo.svg" alt="Logo" style={{ height: `${logoHeight}px` }}/>
      </div>
      <div className="navbar-center">
        <button>INICIO</button>
        <button>JUEGO</button>
        <button>NOTICIAS Y GALLERIA</button>
        <button>COMUNIDAD</button>
        <button>TIENDA</button>
        <button>AYUDA</button>
      </div>
      <div className="navbar-right">
        <button>JUEGA AHORA</button>
      </div>
    </nav>
  );
}

export default Navbar;