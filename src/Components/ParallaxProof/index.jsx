import './styles.css';
import bgImage from '../../assets/Parallax/Background.svg'
import Killer from '../../assets/Parallax/Killer.png'
import Personajes from '../../assets/Parallax/Personajes.png'
export const Parallax = () => {
  return (
    <div className="container">
    <div className="background">
      <img src={bgImage} alt="Background" />
    </div>
    <div className="foreground">
      <img src={Killer} alt="Foreground" className='killer' />
    </div>
    <div className="foreground">
      <img src={Personajes} alt="Foreground" />
    </div>
  </div>

  )
}
