import { iconProps } from '@Utils/Tools/Utils'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Content } from '@Interface/ProducstListInterface'

interface FavProps {
    action:(data:Content)=>void,
    data:Content,
    isFavorite:boolean
}

const FavButton = ({action,data,isFavorite = false}:FavProps) => {
  return (
    <CustomFav onClick={()=>{action(data)}}>
        <FontAwesomeIcon icon={iconProps(faHeart as IconDefinition)} className={`cursor ${isFavorite ? "loved":""}`}/>
    </CustomFav>
  )
}

const CustomFav = styled.div`
.loved{
    color:red;
}

.cursor{
    cursor: pointer;
}

`

export default FavButton