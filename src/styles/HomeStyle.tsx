import styled from 'styled-components';

export const Container = styled.div`
    .submenu{
        background:#ffff;
        padding: 7px;
        border-radius:7px;
        box-shadow:1px 1px 1px rgba(0,0,0, 0.1);
        width: 40%;
        margin: 0px auto;
        display: flex;

        div{
            text-align: center;
            width: calc(100%/4);
        }
    }

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