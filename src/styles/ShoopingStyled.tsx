import styled from "styled-components";

export const ContainerShooping = styled.div`
    
    .content_shopping{
        display: flex;
        width: 100%;
        margin-top: 20px;
        /* padding-bottom: 120px; */
        min-height: 50vh;
        @media screen and (max-width:600px){
            display: flex;
            flex-direction: column;
            margin-bottom: 0px;
           
        }

    }

    .items_cart{
        width: 100%;
        box-sizing: border-box;

        @media screen and (max-width:600px){
            width: 100%;
        }

        /* background: var(--components); */
        padding: 10px;
        /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */

       .emptycart{
        width: 100%;
        max-width: 600px;
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

    .total_pay{
        display: flex;
        position: absolute;
        bottom: 60px;
        font-size: 20px;
        font-weight: 600;
        width: 100%;
        left: 0;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        @media screen and (max-width:600px){
            position: sticky;
            bottom: 70px;
        }
   
        .section{
            text-align: center;
            width: 60%;
            justify-content: space-between;
            cursor: pointer;
            padding: 20px 50px;
            border-radius: 10px;
            color:var(--theme)
        }

        .section:nth-child(1){
            background: var(--primary);
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