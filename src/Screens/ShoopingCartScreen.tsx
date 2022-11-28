
import FormPayment from '@Components/payment/FormPayment'
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@Store/store'
import { getShoppingCart } from '@/store/actions/ShoopingCardActions'
import useShooping from '@/hooks/ShoopingCart/useShooping'

const ShoopingCartScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { Cart:{products} }= useSelector((x: RootState) => x)
    let idCart = localStorage.getItem("idCart") || "";
    const {sum} = useShooping();

    useEffect(() => {
            dispatch(getShoppingCart(idCart));
    }, [])

    return (
        <ContainerShooping>
            <div className='content_shopping'>
                <div className='items_cart'>
                    {products.map(item =>
                    <CardShoopingCart productoCart={item}/>)
                    }
                </div>
            </div>
            <div className='total_pay'>
                <div className='section'>
                    <div className='text_pay'>
                        Total a pagar
                    </div>
                    <div className='quantity'>
                        ${sum(products)}
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