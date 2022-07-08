import styled from 'styled-components'

interface ButtonInteface{
  text:string,
  action?:()=>void,
  Icon?:any,
  color?:string,
  classButton?:string
}

const Button = ({text="",action = ()=>{},Icon,color,classButton = ""}:ButtonInteface) => {
  return (
    <ButtonCustom onClick={action} style={{background:color}} className={classButton}>
        {Icon}
        {text}
    </ButtonCustom>
  )
}

const ButtonCustom = styled.button`
    width: 100%;
    padding: 10px 5px;
    margin:0px auto;
    background: var(--primary);
    border: 0;
    cursor:pointer;
    font-weight: 700;
`

export default Button