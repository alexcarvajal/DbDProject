import LeftHero from '../../assets/HeroLeft.svg'
import RightHero from '../../assets/HeroRight.svg'
import LogoVertical from '../../assets/LogoVerticalLetras.svg' 
import LogoIGN from '../../assets/IGN-Logo.svg'
import PcGamer from '../../assets/PCGamerLogo.svg'
import GameSpotLogo from '../../assets/GameSpotLogo.svg'
import './styles.css';
function Hero(){
  return (
    <>
    <div className="Hero">
        <img src={LeftHero} alt="Left" className='image LeftHero'/>
        <img src={LogoVertical} alt="Imagen de primer plano" className='LogoLetraVertical' />
        <button className='buyGame'>COMPRA EL JUEGO BASE</button>
        <h1 className='first'>9/10</h1>
        <h1 className='second'>88/100</h1>
        <h1 className='third'>9/10</h1>
        <img src={LogoIGN} alt="IGN" className='LogoIGN' />
        <img src={PcGamer} alt="IGN" className='PCGamer' />
        <img src={GameSpotLogo} alt="IGN" className='GameSpot' />
        <img src={RightHero} alt="Right" className=' image RightHero'/>
    </div>
    </>
  )
}

export default Hero;