import { useState, useEffect } from "react"
import ImageSlider from "../ImageSlider"
import "./styles.css"

const Gallery = ({ images,title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');  // Nuevo estado para la animación
  const selectedImage = images[selectedImageIndex];
  const selectedTitle = title[selectedImageIndex];
  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
    setAnimationClass('fade-in');  // Añade la clase cuando se selecciona una nueva imagen

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 500);  // 500ms es la duración de la animación. Ajusta si cambias la duración en el CSS.
    // Limpia el temporizador si el componente se desmonta antes de que termine la animación
    return () => clearTimeout(timer);
  }, [selectedImageIndex]);  // Ejecuta el efecto cada vez que cambia la imagen seleccionada


  return (
    <div className="gallery-container">
      <div className={`image-preview ${animationClass}`}>
        <img src={selectedImage} alt="Selected" />
        <h1 className="text-title">{selectedTitle} </h1>
      </div>
      <ImageSlider images={images} onSelect={handleImageSelect}  />
    </div>
  )
}
export default Gallery