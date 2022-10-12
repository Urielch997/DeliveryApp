
import FormPayment from '@Components/payment/FormPayment'
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'

const ShoopingCartScreen = () => {
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
                <div className='section'>
                    REALIZAR COMPRA
                </div>
            </div>
        </ContainerShooping>

    )
}

export default ShoopingCartScreen