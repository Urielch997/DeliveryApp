import styled from 'styled-components'
import checkMark from '@Img/checkMark.svg';
interface CheckBoxProps {
    size:string
}


const Checkbox = ({checked = true,size = "10px",setChecked = (e:boolean) =>{}}) => {
    return (
        <CheckContainer size={size} onClick={()=>setChecked(!checked)}>
            {checked ?
                <div className='checked'>
                    <img src={checkMark} className="img_mark"/>
                </div>
                : <div className='no_checked'>

                </div>
            }
        </CheckContainer>
    )
}

const CheckContainer = styled.div<CheckBoxProps>`
    cursor:pointer;

    .checked,.no_checked{
        background-color: var(--primary);
        width: ${({size})=> size};
        height: ${({size})=> size};
        border-radius: 2px;
        margin-bottom: 10px;
        display: flex;
        border:1px solid var(--primary);
    }

    .img_mark{
        width: 100%;
        height: 100%;
        margin:0 auto;
    }

    .no_checked{
        background: transparent;
    }
`

export default Checkbox