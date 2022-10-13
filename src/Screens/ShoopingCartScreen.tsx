
import FormPayment from '@Components/payment/FormPayment'
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'
import { useHistory } from 'react-router'

const ShoopingCartScreen = () => {
    const history = useHistory();

    return (
        <ContainerShooping>
            <div className='content_shopping'>
                <div className='items_cart'>
                    <CardShoopingCart />
                    <CardShoopingCart />
                    <CardShoopingCart />
                    <CardShoopingCart />
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