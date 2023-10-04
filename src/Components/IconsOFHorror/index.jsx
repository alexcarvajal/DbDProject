import './styles.css'
import GhostFace from '../../assets/IDT/GhostFace.svg'
import Cerda from '../../assets/IDT/Cerda.svg'
import Leon from '../../assets/IDT/Leon.svg'
import Cheril from '../../assets/IDT/Cheril.svg'
import LogoKiller from '../../assets/IDT/LogoKiller.svg'
import LogoSurvivor from '../../assets/IDT/LogoSurvivor.svg'
 const IconsOfHorror = () => {
  return (
    <>
    <div className='container-IOH'>
       <p className='textoIOT'>ICONOS DEL TERROR</p> 
       <div className="kill">
        <img src={LogoKiller} className="LKiller"alt="" />
        <img src={GhostFace} className='GhostFace' alt="" />
        <img src={Cerda} className='Cerda' alt="" />
       </div>
       <div className='surv'>
        <img src={Leon} className='Leon' alt="" />
        <img src={Cheril} className='Cheril' alt="" />
        <img src={LogoSurvivor} className="LSurvivor"alt="" />
       </div>
       <p className='textoFranquicias'>
        EL UNICO JUEGO DONDE CHOCAN LAS MAYORES FRANQUICIAS DE TERROR
        </p> 
        <button className="viewCharacters">
          VER TODOS LOS PERSONAJES
        </button>

    </div>
    </>
  )
}
export default IconsOfHorror