

const ImageSlider = ({ images, onSelect }) => {
        return (
            <div className="image-slider">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Image ${index}`}
                        onClick={() => onSelect(index)}
                    />
                ))}
            </div>
        );
    };


export default ImageSlider