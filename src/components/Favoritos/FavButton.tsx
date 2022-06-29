import { iconProps } from '@Utils/Tools/Utils'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const FavButton = () => {
  return (
    <CustomFav>
        <FontAwesomeIcon icon={iconProps(faHeart as IconDefinition)} className="cursor loved"/>
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