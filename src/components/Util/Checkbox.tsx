import styled from 'styled-components'
interface CheckBoxProps {
    size:string
}


const Checkbox = ({checked = true,size = "10px",setChecked = (e:boolean) =>{}}) => {
    return (
        <CheckContainer size={size} onClick={()=>setChecked(false)}>
            {checked ?
                <div className='checked'>

                </div>
                : <div className='no_checked'>

                </div>
            }
        </CheckContainer>
    )
}

const CheckContainer = styled.div<CheckBoxProps>`
    .checked,.no_checked{
        background-color: var(--primary);
        width: ${({size})=> size};
        height: ${({size})=> size};
        border-radius: 2px;
    }

    .no_checked{
        background: transparent;
        border:1px solid var(--primary);
    }
`

export default Checkbox