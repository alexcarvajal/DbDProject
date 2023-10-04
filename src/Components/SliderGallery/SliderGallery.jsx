import Gallery from "./Gallery"
function SliderGallery(){
    const images=[
        '/KillerOrSurvivor.png',
        '/ThirllHunt.png',
        '/Together.png',
        '/Unpredictable.png',
        '/Rewarding.png',
    ]
    const title=[
      'Asesino o Superviviente',
      'Caza emocionante',
      'Juega con amigos es mejor',
      'Sé impredecible',
      'Obtén recompensas'
    ]
     
    
  return (
    <div className="sliderGallery">
        <Gallery images={images} title={title}/>
    </div>
  )
}

export default SliderGallery