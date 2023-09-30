import './styles.css'
import SteamLogo from '../../assets/SteamLogo.svg'
import EpicLogo from '../../assets/EpicLogo.svg'
import MicrosoftLogo from '../../assets/MicrosoftLogo.svg'
import PsLogo from '../../assets/PsLogo.svg'
import XboxLogo from '../../assets/XboxLogo.svg'
import NintendoLogo from '../../assets/NintendoLogo.svg'
const BannerLogos = () => {
    return (
        <div className='section-container'>
            <p>Bienvenido al mortal juego del escondite</p>
            <div className='Logos'>
            <img src={SteamLogo} alt="Steam" />         
            <img src={EpicLogo} alt="Epic" /> 
            <img src={MicrosoftLogo} alt="Epic" /> 
            <img src={PsLogo} alt="Epic" /> 
            <img src={XboxLogo} alt="Epic" /> 
            <img src={NintendoLogo} alt="Epic" /> 

            </div>
        </div>
    )
}

export default BannerLogos