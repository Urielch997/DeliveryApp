import { useState } from "react"
import Card from "../components/Home/Card"
import CardArticle from "../components/Home/CardArticle"
import Detail from "../components/Home/Detail"
import Pagination from "../components/Util/Pagination"
import { Container } from "../styles/HomeStyle"

const HomeScreen = () => {
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)

    const pageChange = (page: number) => {

    }


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
                        <Card setSeeDetail={setSeeDetail} />
                    }
                    {seeDetail ?
                        null
                        :
                        <div className='pagination_container'>
                            <Pagination total={300} page={11} onChange={pageChange} />
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
