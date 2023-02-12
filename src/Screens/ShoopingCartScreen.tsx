
import { ContainerShooping } from '@Styles/ShoopingStyled'
import CardShoopingCart from '@Components/ShoopingCart/CardShoopingCart'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@Store/store'
import { getShoppingCart } from '@/store/actions/ShoopingCardActions'
import useShooping from '@/hooks/ShoopingCart/useShooping';
import emptyCart from "@Img/cartempty.svg";

const ShoopingCartScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { Cart: { products } } = useSelector((x: RootState) => x)
    let idCart = localStorage.getItem("idCart") || "";
    const { sum } = useShooping();

    useEffect(() => {
        dispatch(getShoppingCart(idCart));
    }, [])

    return (
        <ContainerShooping>
            <div className='content_shopping'>
                <div className='items_cart'>
                    {products.length ?
                        products.map(item =>
                            <CardShoopingCart productoCart={item} key={item.idItem} />)
                        :
                        <img src={emptyCart} alt="empty" className='emptycart' />
                    }
                </div>
            </div>
            {products.length ?
                <div className='total_pay'>
                    <div className='section' onClick={() => history.push("/checkout?page=1")}>
                       <div>Proceder a pagar</div>
                       <div> &gt;</div>
                    </div>
                </div>
                :
                null}
        </ContainerShooping>

    )
}

export default ShoopingCartScreen