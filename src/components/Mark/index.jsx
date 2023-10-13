import { ImageCustom } from './styles'
import Marcar from '../../assets/bxs-check-square.svg'
import Dasmarcar from '../../assets/bx-no-entry.svg'

function Mark({ setIsOn, isOn }) {

  const handleIcon = () => {
   setIsOn(!isOn)
  }
    
  return (
   <>
    <ImageCustom>
     <img src={isOn ? Marcar : Dasmarcar} onClick={handleIcon}/>
    </ImageCustom>
   </> 
  )
}

export default Mark