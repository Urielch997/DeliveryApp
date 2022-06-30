import { iconProps } from '@Utils/Tools/Utils'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


const Back = ({ action = () => { } }) => {
    return (
        <Container>
            <FontAwesomeIcon onClick={() => action()} icon={iconProps(faArrowCircleLeft as IconDefinition)} className="icon_color" />
        </Container>
    )
}

const Container = styled.div`
    .icon_color{
        cursor: pointer;
    }
`

export default Back