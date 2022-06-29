import styled from 'styled-components'

const Back = ({action = ()=>{}}) => {
    return (
        <BackButton onClick={()=>action()}>
            Back
        </BackButton>
    )
}

const BackButton = styled.button`
    position: absolute;
    top:0;
    background: var(--primary);
    border: 0;
`

export default Back