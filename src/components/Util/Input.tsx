import styled from 'styled-components';

export interface PropsInput {
  clases?: string,
  placeholder?: string,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  type?: typesInput,
  inputLL?: React.RefObject<HTMLInputElement>,
  name:string,
  maxLength?:number | undefined
}

type typesInput = "text" | "password" | "email" | "date" | "month"

export enum enumInput {
  PASSWORD = "password",
  EMAIL = "email",
  TEXT = "text",
  CALENDAR = "date",
  MONTH = "month"
}

const Input = ({ clases = "", placeholder = "", value = "", onChange = () => { }, type = "text",inputLL,name = "",maxLength= undefined}: PropsInput) => {



  return (
    <InputCustom className={clases} placeholder={placeholder} name={name} onChange={onChange} type={type} ref={inputLL} defaultValue={value} maxLength={maxLength}/>
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