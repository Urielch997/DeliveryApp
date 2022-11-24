
import FormPayment from '@Components/payment/FormPayment'
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@Store/store'
import { getShoppingCart } from '@/store/actions/ShoopingCardActions'

const ShoopingCartScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { Cart }= useSelector((x: RootState) => x)

    useEffect(() => {
       
            dispatch(getShoppingCart("d74ab8e0-6b00-4295-9102-87b1554fd18c"));
        
    }, [])

    return (
        <ContainerShooping>
            <div className='content_shopping'>
                <div className='items_cart'>
                    <CardShoopingCart />
                </div>
            </div>
            <div className='total_pay'>
                <div className='section'>
                    <div className='text_pay'>
                        Total a pagar
                    </div>
                    <div className='quantity'>
                        $35.00
                    </div>
                </div>
                <div className='section' onClick={()=>history.push("/checkout?page=1")}>
                    REALIZAR COMPRA
                </div>
            </div>
        </ContainerShooping>

    )
}

export default ShoopingCartScreen