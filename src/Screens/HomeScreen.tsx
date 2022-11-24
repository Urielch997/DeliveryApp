import useHome from "@/hooks/Home/useHome"
import Card from "@Components/Home/Card"
import CardArticle from "@Components/Home/CardArticle"
import Detail from "@Components/Home/Detail"
import Loading from "@Components/Util/Loading"
import Pagination from "@Components/Util/Pagination"
import { getProductosList } from "@Store/actions/ProductosActions"
import { RootState } from "@Store/store"
import { Container } from "@Styles/HomeStyle"
import SubMenu from "@Utils/SubMenu"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { productos,Auth:{dataUser}}= useSelector((x: RootState) => x)
    const {CardSelected,SeeDetail,seeDetail,setSeeDetail} = useHome();
    const Options = [
        { id: 1, nombre: "Comida" },
        { id: 2, nombre: "Postres" },
        { id: 3, nombre: "Mariscos" },
    ]
    const idUser = parseInt(localStorage.getItem("user") || "0");

    const pageChange = (page = 1) => {
        dispatch(getProductosList(page - 1,idUser));
    }

    useEffect(() => {
        if (!productos?.data.content.length) {
            dispatch(getProductosList(1,idUser));
        }
    }, [])

    return (
        <Container>
            <div className='title_home'>
                <label>{`Hola ${dataUser.userName}`}</label>
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
                                    <Card setSeeDetail={SeeDetail} key={item.idItem} data={item} />
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
