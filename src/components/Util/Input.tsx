import React from 'react'
import styled from 'styled-components';

const Input = ({clases = ""}) => {
  return (
    <InputCustom className={clases}/>
  )
}

const InputCustom = styled.input`
    background: #ececec;
    border:0px transparent;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;

    &:focus,&:active{
        border:0px transparent;
    }
`

export default Input