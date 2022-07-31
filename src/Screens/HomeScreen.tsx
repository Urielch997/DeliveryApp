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

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { productos,Auth:{facebookLogin} } = useSelector((x: RootState) => x)
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)
    const location = useLocation();
    const [CardSelected, setCardSelected] = useState<Content>();
    let token:any = null;
    let error:any = null;
    const Options = [
        { id: 1, nombre: "Comida" },
        { id: 2, nombre: "Postres" },
        { id: 3, nombre: "Mariscos" },
    ]

    const getUrlParameter = (name:string) =>{
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    useEffect(()=>{
        token = getUrlParameter('token');
        error = getUrlParameter('error');
    },[])

    useEffect(()=>{
        console.log("log",token,error)
    },[token,error])

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
                <label>{`Hola ${facebookLogin.name}`}</label>
            </div>
            <div className='container_submenu'>
                <SubMenu options={Options} />
            </div>
            <div className='container_content'>
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                     Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    Log in with Facebook</a>
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
