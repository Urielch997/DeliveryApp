import { createGlobalStyle } from 'styled-components'

interface Props {
  colorApp: string
}

export const GlobalStyle = createGlobalStyle<Props>`
  :root{
    --primary:#fec405;
    --theme:#f7f7f7f7;
    --components:#fff;
    --text:#fff
  }

  .active {
    color:var(--primary);
  }

  body::-webkit-scrollbar{
    background: #ececec;
    width: 10px;
}

body::-webkit-scrollbar-thumb{
    background:var(--primary);
    border-radius: 10px;
}

.button_classic{
  padding: 2px 10px;
  background: #ececec;
  border: 0px;
  height: 25px;
  border-radius: 5px;
}

.white{
  color:var(--text)
}

.cursor{
  cursor:pointer;
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

.icon_color{
    position: absolute;
    top:0;
    color: var(--primary);
    border: 0;
    font-size: 30px;
}

.buttondefult{
  background: var(--primary);
  border:0;
  padding: 2px 10px;
  height: 25px;
  border-radius: 5px;
  color:#fff;
  cursor: pointer;
}

.label_footer{
display: block;
}

.shadow{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.shadow_solid{
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
}

@media screen and (max-width:600px){
.label_footer{
display: none;
}
}
`
