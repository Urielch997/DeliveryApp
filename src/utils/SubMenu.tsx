import { dataCategoria } from '@/interface/CategoriaInterface';
import styled from 'styled-components';

interface Parametros {
    options:dataCategoria[]
}

const SubMenu = ({options = []}:Parametros) => {
  return (<Submenu>
  {options.map(items =>(
      <div key={items.idCategoria} className="active"><span className='name'>{items.nombreCategoria}</span></div>
  ))}
</Submenu>)
};

const Submenu = styled.div`
        background:#ffff;
        padding: 7px;
        border-radius:7px;
        box-shadow:1px 1px 1px rgba(0,0,0, 0.1);
        width: 40%;
        margin: 0px auto;
        display: flex;

        div{
            text-align: center;
            width: calc(100%/4);
        }

        .name{
            cursor: pointer;
        }

        @media screen and (max-width:600px){
            margin: 0px auto;
            width: 90%;
        
    }
`

export default SubMenu;
