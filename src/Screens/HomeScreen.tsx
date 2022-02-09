import { useEffect, useState } from "react"
import Card from "@Components/Home/Card"
import CardArticle from "@Components/Home/CardArticle"
import Detail from "@Components/Home/Detail"
import Pagination from "@Components/Util/Pagination"
import { Container } from "@Styles/HomeStyle"
import useRequest from "../Services/useRequest";
import { ProductsList } from "@/interface/ProducstListInterface"
import Loading from "@Components/Util/Loading"

const HomeScreen = () => {
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)
    const [state,getData] = useRequest<ProductsList>();

    const pageChange = (page: number) => {
        getData(`http://localhost:8080/deliveryapp/api/products?page=${page - 1}&size=10`,"GET");
    }

    useEffect(()=>{
            getData("http://localhost:8080/deliveryapp/api/products?page=0&size=10","GET");
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <div className='title_home'>
                <label>Hola, </label>
                <label>Que vas a comer hoy?</label>
            </div>
            <div className='container_submenu'>
                <div className='submenu'>
                    <div><span className='active'>Comida</span></div>
                    <div><span>Comida</span></div>
                    <div><span>Comida</span></div>
                    <div><span>Comida</span></div>
                </div>
            </div>
            <div className='container_content'>
                <div className='container_card'>
                    {seeDetail ?
                            <Detail />
                        :
                        <>
                        {state.isLoading ?
                            <Loading/>
                            :
                            state.data?.result.content.map((item,index)=>
                                <Card setSeeDetail={setSeeDetail} key={index} data={item}/>
                                )
                        }
                        </>
                    }
                    {seeDetail ?
                        null
                        :
                        <div className='pagination_container'>
                            <Pagination total={state.data?.result.totalElements} page={(state.data?.result.number || 0) + 1} onChange={pageChange} />
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
