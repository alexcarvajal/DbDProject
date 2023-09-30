import './styles.css'
import KillerIcon from '../../assets/KillerIcon.svg'
import SurvIcon from '../../assets/SurvIcon.svg'
const BannerKS = () => {
  return (
    <>
      <div className="container-ks">
        <div className="solo">
          <div className='solo-column'>
            <span className='TextKiller'>JUEGA COMO</span>
            <span className='KillerSolo'>EL ASESINO (SOLO)</span>
            <div className='GamePlay-Killer'> EXPLORA GAMEPLAY </div>
          </div>
          <img src={KillerIcon} className='killerIcon' alt="" />
        </div>
        <div className="co-op">
          <img src={SurvIcon} className='SurvIcon' alt="" />
          <div className='coop-column'>
            <span className='TextSurv'>JUEGA COMO</span>
            <span className='SurvCoop'>EL SOBREVIVIENTE (CO-OP) </span>
            <div className='GamePlay-Surv'> EXPLORA GAMEPLAY </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerKS