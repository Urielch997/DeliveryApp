import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from "@Service/Paths"
import Card from "@Components/Home/Card"
import CardArticle from "@Components/Home/CardArticle"
import Detail from "@Components/Home/Detail"
import Loading from "@Components/Util/Loading"
import Pagination from "@Components/Util/Pagination"
import { Content } from "@Interface/ProducstListInterface"
import { getProductosList } from "@Store/actions/ProductosActions"
import { RootState } from "@Store/store"
import { Container } from "@Styles/HomeStyle"
import SubMenu from "@Utils/SubMenu"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import useHome from "@/hooks/Home/useHome"

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { productos,Auth}= useSelector((x: RootState) => x)
    const {CardSelected,SeeDetail,seeDetail,setSeeDetail} = useHome();
    const Options = [
        { id: 1, nombre: "Comida" },
        { id: 2, nombre: "Postres" },
        { id: 3, nombre: "Mariscos" },
    ]

    const pageChange = (page = 1) => {
        dispatch(getProductosList(page - 1));
    }

    useEffect(() => {
        if (!productos?.data.content.length) {
            dispatch(getProductosList());
        }
    }, [])

    return (
        <Container>
            <div className='title_home'>
                <label>{`Hola `}</label>
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
