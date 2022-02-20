import styled from 'styled-components';

/**
 * Retorna componente de tarjeta de items
 * 
 * @returns Componente de tarjeta
 */
const CardArticle = () => {
    return (
        <CardWrapperAr>
            <img src="https://alfabetajuega.com/hero/2020/12/xbox-series-x-s.jpg?width=1200&aspect_ratio=1200:631"/>
        </CardWrapperAr>
    )
}

const CardWrapperAr = styled.div`
    width: 350px;
    height: 200px;
    background: #ECECEC;
    border-radius: 10px;
    margin-bottom: 20px;

     img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
    @supports(object-fit: cover){
        img{
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }
`

export default CardArticle;
