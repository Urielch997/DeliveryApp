import useShooping from "@Hooks/ShoopingCart/useShooping";
import { Content } from "@Interface/ProducstListInterface";
import { MoneyFormat } from "@Interface/UtilsInterface";
import { convertMoney } from "@Utils/Tools/Utils";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import styled from "styled-components"
import FavButton from "../Favoritos/FavButton";
import Back from "../Util/Back"
import Button from "../Util/Button"

interface CardProps {
    setSeeDetail: React.Dispatch<React.SetStateAction<Boolean>>;
    data: Content | undefined
}


const Detail = ({ setSeeDetail, data = {
    idItem: 0,
    nombre: "",
    idCategoria: 0,
    precio: 0,
    precioOferta: 0,
    imagen: "",
    description: "",
    favorito:false
} }: CardProps) => {
    const { addFav } = useShooping();
    const fav = useSelector((x:RootState)=>x.favoritos);

    return (
        <Wrapper>
            <Back action={() => setSeeDetail(false)} />
            <div className="card_product">
                <img className="imagen" src={data?.imagen || ""} />
            </div>
            <div className="card_description">
                <div className="card_header"><FavButton action={(e) => {addFav(e)}} data={data} isFavorite={data.favorito}/></div>
                <div className="price"><h1>{convertMoney({ text: data?.precio } as MoneyFormat)}</h1></div>
                <div className="text_descripcion">
                    {data?.description}
                </div>
                <div className="card_button">
                    <Button text="AGREGAR AL CARRITO" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: relative;
    min-height: 600px;
    width: 100%;
    margin: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card_header{
        display: flex;
        justify-content: flex-end;
        margin:5px 10px;
    }

    .price{
        margin-top:60px;
        width: 100%;
        text-align: center;
    }

    .card_product{
        width: 400px;
        height: 80%;
        background: transparent;
        display: flex;
        justify-content: center;

        .imagen{
            object-fit: contain;
            width: 100%;
        }
    }

    .card_button{
        display: flex;
        width: 100%;
    }

    .card_description{
        width: 350px;
        height: 60%;
        background: var(--components);
    }

    .text_descripcion{
        padding: 5px;
        margin:10px 5px;
        text-align: center;
    }

    .first_container, .second_container,.third_container{
        border-radius: 15px;
    }

    .first_container{
        object-fit: cover;
        background-image:url('/img/OIP.jpg');
        background-size: 100%;
        min-height: 400px;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .second_container{
        min-height: 300px;
        height: 85%;
        background: #ECECEC;
        width: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        justify-content: flex-end;

        .title_second{
            display: flex;
            width: 90%;
            margin: 5px auto;

            .section{
                width: 50%;
                text-align:center;

                .title{
                    font-size: 20px;
                    font-weight: 700;
                }
            }
        }
    }

    .third_container{
        min-height: 200px;
        height: 87%;
        width: 100%;
        background: #F7F7F7;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .title_cards{
            width: 60%;
            margin:5px auto;
            text-align: center;

            label{
                margin:5px 20px;
            }
        }
    }
`

export default Detail
