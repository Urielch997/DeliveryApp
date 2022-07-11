
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { iconProps } from '@Utils/Tools/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

const ShoopingCart = ({counter = 0,click = ()=>{}}) => {

  return (
    <CustomCart onClick={click}>
        <FontAwesomeIcon icon={iconProps(faShoppingCart as IconDefinition)}/>
        { counter ?
        <div className='counter_item'>{counter ? counter : null}</div>
        : 
        null
        }
    </CustomCart>
  )
}

const CustomCart = styled.div`
    position: relative;
  width: fit-content;

    .counter_item{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        border-radius: 100%;
        background: var(--primary);
        text-align: center;
        position: absolute;
        width: 20px;
        height: 20px;
        top:-5px;
        right: -13px;
    }
`

export default ShoopingCart