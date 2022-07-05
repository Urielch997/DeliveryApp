import styled from 'styled-components'

interface ButtonInteface{
  text:string,
  action?:()=>void,
  Icon?:any
}

const Button = ({text="",action = ()=>{},Icon}:ButtonInteface) => {
  return (
    <ButtonCustom onClick={()=>action()}>
        {Icon}
        {text}
    </ButtonCustom>
  )
}

const ButtonCustom = styled.button`
    width: 95%;
    padding: 10px 5px;
    margin:0px auto;
    background: var(--primary);
    border: 0;
    cursor:pointer;
    font-weight: 700;
`

export default Button