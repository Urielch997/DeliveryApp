import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface Props {
    page?: number,
    size?: number,
    total?: number,
    onChange?: (page: number) => void
}


const Pagination = ({ onChange = (page: number) => { }, page = 0, total = 0, size = 10 }: Props) => {
    const [count, setCount] = useState<number[]>([]);

    /**
     * Se realiza la ejecucion de la funcion a la hora de realizar el calculo de las paginas
     * para poder renderizar los 5 numeros de paginas correspondientes
     */
    useEffect(() => {
        const generatePageNumber = () => {
            let cont: number[] = [];
            
            for (let index = 6; index < total; index++) {
                if (Number.isInteger(index / size) && (index / size) !== 0) {
                    let page1 = index / size;
                    cont.push(page1)
                }

                if (cont.length >= 5) {
                    break;
                }
            }
            setCount(cont)
        }
        generatePageNumber();
    }, [page, size, total])

    return (
        <Wrapper>
            <ul>
                <li className="prev" onClick={() => { onChange(1) }}><FontAwesomeIcon icon={faCaretLeft} /></li>
                {total - parseInt(page + '0') < 50 ?
                    count.length > 4 ?<li>...</li>
                    : null : null
                }
                {
                    count.map((item, index) => (<li className={page === item ? 'active_page' : ''} key={index} onClick={() => { onChange(item) }}>{item}</li>))
                }
                {total - parseInt(page + '0') > 50 ?
                    <li>...</li>
                    : null
                }
                <li className="next" onClick={() => { onChange(count.length) }}><FontAwesomeIcon icon={faCaretRight} /></li>
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
