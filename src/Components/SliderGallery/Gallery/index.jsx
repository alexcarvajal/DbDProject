import { useState } from "react"
import ImageSlider from "../ImageSlider"
import "./styles.css"

const Gallery = ({ images,title }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage = images[selectedImageIndex];
  const selectedTitle = title[selectedImageIndex];
  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <div className="gallery-container">
      <div className="image-preview">
        <img src={selectedImage} alt="Selected" />
        <h1 className="text-title">{selectedTitle} </h1>
      </div>
      <ImageSlider images={images} onSelect={handleImageSelect}  />
    </div>
  )
}


/* export default Gallery; */

export default Gallery