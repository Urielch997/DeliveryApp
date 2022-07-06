import React from 'react'
import styled from 'styled-components';

const Input = ({clases = "",placeholder = ""}) => {
  return (
    <InputCustom className={clases} placeholder = {placeholder}/>
  )
}

const InputCustom = styled.input`
    background: #ececec;
    border:0px transparent;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;

    &:focus,&:active{
        border:0px transparent;
    }
`

export default Input