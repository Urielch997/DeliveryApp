import Cards from "../components/Orden/Cards"
import { OrdenContainer } from "../styles/OrdenStyle"

const OrdenScreen = () => {

    return (
        <OrdenContainer>
            <div>
                <h2>TUS ORDENES</h2>
                <label className='active'>Aqui veras tus pedidos</label>
            </div>
            <div className='container_cards'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </OrdenContainer>
    )
}

export default OrdenScreen
