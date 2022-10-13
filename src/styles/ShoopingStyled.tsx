import styled from "styled-components";

export const ContainerShooping = styled.div`
    
    .content_shopping{
        display: flex;

        @media screen and (max-width:600px){
            display: flex;
            flex-direction: column;
        }

    }

    .items_cart{
        width: 100%;
        box-sizing: border-box;

        @media screen and (max-width:600px){
            width: 100%;
        }

        background: var(--components);
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    .payment_card{
       display: flex;
       justify-content: flex-end;
        height: 500px;
        width: 50%;

        @media screen and (max-width:600px){
            width: 100%;
        }
    }

    .total_pay{
        display: flex;
        position: sticky;
        bottom: 0;
        font-size: 20px;
        font-weight: 600;

        @media screen and (max-width:600px){
            bottom: 50px;
        }
        .section{
            width: 50%;
            padding: 10px;
            cursor: pointer;
        }

        .section:nth-child(1){
            background: var(--headerTheme);
            display: flex;
            .quantity,.text_pay{
                width: 50%;
            }
        }

        .section:nth-child(2){
            background: var(--primary);
            color:var(--text)
        }
    }


`