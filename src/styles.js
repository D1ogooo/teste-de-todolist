import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
 margin-top: 200px;
`

export const PaiSearch = styled.div`
 display: flex;
 justify-content: center;
`

export const Lista = styled.div`
 display: flex;
 justify-content: center;
 padding: 10px;
`

export const ListaDeTarefas = styled.ul`
 display: flex;
 flex-direction: column;
 margin-left: -125px;
 
 img {
  cursor: pointer;
 }

 p {
  margin: 0 auto;
  margin-top: 8px;
  font-family: sans-serif;
  font-weight: 600;
  color: #fff;
 }

 li {
   background-color: aqua;
   width: 300px;
   height: 30px;
   display: flex;
   justify-content: space-between;
 }

 .isDone {
  text-decoration: line-through;
 }
`