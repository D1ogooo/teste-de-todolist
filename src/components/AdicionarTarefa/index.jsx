import { ButtonCriar, PaiContainer } from './styles'
import { useRef } from 'react'

function Search({ setLista }){
 const InputCheck = useRef(null)
 
 const handleSubmit = (event) => {
  event.preventDefault()

  if (InputCheck.current) {
    let valueInput = InputCheck.current.value

    let NewTable = {
     text: `${valueInput}`,
     done: false,
    }
    
    if (valueInput.length > 0){
      setLista((prevState) => [...prevState, NewTable])
    }
  }
 }
 
 return (
  <>
   <PaiContainer>
    <input type="text" placeholder='Declare uma tarefa' ref={InputCheck}/> 
    <ButtonCriar onClick={handleSubmit}>Criar</ButtonCriar>
   </PaiContainer>
  </>
 )
}

export default Search