import styled from 'styled-components'

const Cards = () => {
    return (
        <CardOrden>
            <div>

            </div>
            <div>
                <div>
                    <label>Burger king</label><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus, quo adipisci ducimus in veniam totam quas aliquid tempora 
                    magni deleniti, minima voluptates earum dolorem est quaerat vero cum consequatur.
                </div>
                <div className='btn_group'>
                    <button className='buttondefult'>Confirmar</button>
                    <button className='button_classic'>Cancelar</button>
                </div>
            </div>
        </CardOrden>
    )
}

const CardOrden = styled.div`
    background: #fff;
    width: 550px;
    height: 250px;
    margin: 20px;
    border-radius:15px;
    box-shadow:1px 1px 1px rgba(0,0,0, 0.1);

    .btn_group{
        width: 300px;
        display: flex;
        justify-content: space-around;
    }
`

export default Cards
