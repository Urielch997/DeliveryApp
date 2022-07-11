
import FormPayment from '@Components/payment/FormPayment'
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'

const ShoopingCartScreen = () => {
    return (
        <ContainerShooping>ShoopingCartScreen
            <div className='content'>
                <div className='items_cart'>
                    <CardShoopingCart />
                    <CardShoopingCart />
                    <CardShoopingCart />
                    <CardShoopingCart />
                    <CardShoopingCart />
                </div>
                <div className='payment_card'>
                    <FormPayment/>
                </div>
            </div>
        </ContainerShooping>

    )
}

export default ShoopingCartScreen