import styled from 'styled-components'

interface ButtonInteface{
  text:string,
  action?:()=>void,
  Icon?:any,
  color?:string,
  classButton?:string,
  typeButton?:typesButton
}

type typesButton = 'button' | 'submit' | 'reset'

const Button = ({typeButton="button",text="",action = ()=>{},Icon,color,classButton = ""}:ButtonInteface) => {
  return (
    <ButtonCustom type={typeButton} onClick={action} style={{background:color}} className={classButton} >
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