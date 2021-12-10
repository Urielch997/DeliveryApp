import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .active {
    color:#fec405;
  }

  body::-webkit-scrollbar{
    background: #ececec;
    width: 10px;
}

body::-webkit-scrollbar-thumb{
    background: #fec405;
    border-radius: 10px;
}

.button_classic{
  padding: 2px 10px;
  background: #ececec;
  border: 0px;
  height: 25px;
  border-radius: 5px;
}

.inputBack{
  background: #ECECEC;
  border:0;
  border-radius: 5px;
  height: 25px;
  padding: 2px 10px;
  margin-right: 10px;
}

.link{
  cursor: pointer;
}

.inputBack:focus, .inputBack:active{
  border:0;
  outline: none;
}

.buttondefult{
  background: #fec405;
  border:0;
  padding: 2px 10px;
  height: 25px;
  border-radius: 5px;
  color:#fff;
  cursor: pointer;
}
`
