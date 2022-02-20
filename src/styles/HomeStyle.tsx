import styled from 'styled-components';

export const Container = styled.div`
    .pagination_container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .container_submenu{
        width: 100%;
    }

    .container_content{
        width: 100%;
        display: flex;
        margin-top: 25px;
        justify-content: center;
        align-content: flex-start;

        .container_card{
            width: 70%;
            display: flex;
            flex-wrap:wrap;
        }

        .container_section{
            width: 30%;

            .titulo_section{
                text-align: center;
                width: 100%;
            }

            .card{
                width: 100%;
            }
        }
    }

    
    .title_home{
        width: 40%;
        text-align:center;
        margin: 10px auto;
    }
`