import { useEffect, useState } from "react"
import Card from "@Components/Home/Card"
import CardArticle from "@Components/Home/CardArticle"
import Detail from "@Components/Home/Detail"
import Pagination from "@Components/Util/Pagination"
import { Container } from "@Styles/HomeStyle"
import { Content } from "@Interface/ProducstListInterface";
import Loading from "@Components/Util/Loading"
import SubMenu from "@Utils/SubMenu";
import { getProductosList } from "@Store/actions/ProductosActions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/store"

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { productos } = useSelector((x: RootState) => x)
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)
    const [CardSelected, setCardSelected] = useState<Content>();

    const Options = [
        { id: 1, nombre: "Comida" },
        { id: 2, nombre: "Postres" },
        { id: 3, nombre: "Mariscos" },
        { id: 4, nombre: "Carnes" },
        { id: 5, nombre: "Cereales" },
    ]

    const pageChange = (page = 1) => {
        dispatch(getProductosList(page - 1));
    }

    useEffect(() => {
        if (!productos?.data.content.length) {
            dispatch(getProductosList());
        }
    }, [])



    const SeeDetail = (data: Content) => {
        setCardSelected(data);
        setSeeDetail(true)
    }

    return (
        <Container>
            <div className='title_home'>
                <label>Hola </label>
            </div>
            <div className='container_submenu'>
                <SubMenu options={Options} />
            </div>
            <div className='container_content'>
                <div className='container_card'>
                    {seeDetail ?
                        <Detail setSeeDetail={setSeeDetail} data={CardSelected} />
                        :
                        <>
                            {productos?.isLoading ?
                                <Loading />
                                :
                                productos?.data.content.map((item, index) =>
                                    <Card setSeeDetail={SeeDetail} key={index} data={item} />
                                )
                            }
                        </>
                    }
                    {seeDetail || productos.isLoading ?
                        null
                        :
                        <div className='pagination_container'>
                            <Pagination total={productos?.data.totalElements} page={(productos?.data.number || 0) + 1} onChange={pageChange} />
                        </div>
                    }
                </div>
                <article className='container_section'>
                    <div className='titulo_section'>Proximamente</div>
                    <div className='card'>
                        <CardArticle />
                        <CardArticle />
                        <CardArticle />
                    </div>
                </article>
            </div>
        </Container>
    )
}

export default HomeScreen
