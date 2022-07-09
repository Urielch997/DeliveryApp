import styled from 'styled-components';

export interface PropsInput {
  clases?:string,
  placeholder?:string,
  value?:string,
  onChange?:React.ChangeEventHandler<HTMLInputElement>
}

const Input = ({clases = "",placeholder = "",value = "",onChange}:PropsInput) => {
  return (
    <InputCustom className={clases} placeholder = {placeholder} value={value} onChange={onChange}/>
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