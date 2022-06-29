import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { iconProps } from '@Utils/Tools/Utils';

interface Props {
    page?: number,
    size?: number,
    total?: number,
    onChange?: (page: number) => void
}

/**
 * Componente para realiar paginacion con estilos personalizados
 * 
 * @param page numero de pagina a la cual navegar
 * @param total total de elementos de la pagina para realizar la division
 * @param size  cantidad de elementos a mostrar por pagina
 *  @param onChange funcion para realizar la paginacion retorna el numero de pagina seleccionada
 * @returns numero de la pagina seleccionada por el usuairo
 */
const Pagination = ({ onChange = (page: number) => { }, page = 0, total = 0, size = 10 }: Props) => {
    const [count, setCount] = useState<number[]>([]);
    const [current,setCurrent] = useState<number>(1);

    /**
     * Se realiza la ejecucion de la funcion a la hora de realizar el calculo de las paginas
     * para poder renderizar los 5 numeros de paginas correspondientes
     */
     
    useEffect(() => {
      
        const generatePageNumber = () => {
            let cont: number[] = [];
            
            let pages = Math.ceil(total / size);

            for (let index = current; index <= pages; index++) {
                cont.push(index)

                // if(count[4] === page){
                //     setCurrent(count[4])
                // }

                // if(cont.length === 5){
                //     break;
                // }
            }
            setCount(cont)
        }
        generatePageNumber();
    }, [page, size, total,current])

    return (
        <Wrapper>
            <ul>
                {page === 1 ?
                null:
                <li className="prev" onClick={() => { onChange(1) }}><FontAwesomeIcon icon={iconProps(faCaretLeft as IconDefinition)} /></li>
                }
                {
                    count.map((item, index) => (<li className={page === item ? 'active_page' : ''} key={index} onClick={() => { onChange(item) }}>{item}</li>))
                }
                {page === count.length ?
                null
                :
                <li className="next" onClick={() => { onChange(count.length) }}><FontAwesomeIcon icon={iconProps(faCaretRight as IconDefinition)}/></li>
                }
                </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        li{
            padding: 10px 15px;
            font-weight: 700;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
            margin-left:10px;
            cursor: pointer;
        }
    }

    .prev{
        border-radius:10px 0px 0px 10px;
    }

    .next{
        border-radius: 0px 10px 10px 0px;
    }

    .active_page{
        background: #fec405;
        color:#FFF;
    }
`

export default Pagination
