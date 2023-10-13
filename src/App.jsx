import { PaiSearch, Container, Lista, ListaDeTarefas } from './styles'
import { useState } from 'react'
import Mark from './components/Mark'
import Search from './components/AdicionarTarefa/index'
import Excluir from './assets/bx-x.svg'

function App() {
  const [lista, setLista] = useState([])
  const [isOn, setIsOn] = useState(false)

  const handleDelete = (index) => {
   const mandado = [...lista]
   mandado.splice(index,1)
   setLista(mandado)
  }

  const handleClick = (index, value) => {
   const updateLista = [...lista]
   updateLista[index].done = value
   setLista(updateLista)
  }
  
  return (
    <>
      <Container>
        <PaiSearch>
         <Search setLista={setLista}/>
        </PaiSearch>

        <Lista>
         <ListaDeTarefas>
          {lista.map((tarefas,index) => (
            <li key={index}>
             <Mark isOn={tarefas.done} setIsOn={(value) => handleClick(index,value)}/>
             <p className={tarefas.done ? 'isDone': ''}>{tarefas.text}</p>
             <img src={Excluir} onClick={() => handleDelete(index)}/>
            </li>
           ))}
         </ListaDeTarefas>
        </Lista>
      </Container>
    </>
  )
}

export default App
