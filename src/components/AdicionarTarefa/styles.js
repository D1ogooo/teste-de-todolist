import styled from 'styled-components'

export const ButtonCriar = styled.button`
 background-color: purple;
 color: #ffff;
 font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
 font-weight: 500;
 border: none;
 cursor: pointer;

 width: 80px;
 height: 36px;
 margin-left: 5px;
 border-radius: 5px;
 font-size: 13px;
`

export const PaiContainer = styled.form`
 input {
  width: 300px;
  height: 30px;
  border-radius: 12px;
  border: solid 1px #000;
  outline: none;
 }

 ::placeholder {
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
 }
`