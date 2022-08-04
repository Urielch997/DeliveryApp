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
        width: 65%;

        @media screen and (max-width:600px){
            width: 100%;
        }
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


`