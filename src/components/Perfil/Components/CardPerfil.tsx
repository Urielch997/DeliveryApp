import React from 'react'
import styled from 'styled-components'

interface PropsCardPerfil {
  children: React.ReactFragment
}

const CardPerfil = ({ children }: PropsCardPerfil) => {
  return (
    <WrapperPerfil>
      {children}
    </WrapperPerfil>
  )
}

const WrapperPerfil = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background: var(--components);
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
`

export default CardPerfil