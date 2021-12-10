import styled from "styled-components";

export const OrdenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .section,.second_container{
        background: #fff;
        box-shadow:0px 0px 1px rgba(0,0,0, 0.1);
        padding: 20px;
    }
    
    .title_informacion{
        width: 90%;
        margin: 0px auto;
    }

    .item_first_section{
        margin-top: 20px;
    }

    .first_container{
        width: 50%;
    }

    .input_change{
        width: 30px;
        height: 15px;
    }

    .second_container{
        width: 350px;
        
    }

    .first_container{
        height: 350px;


        .section{
            height: calc(350px/2);
            border-radius:10px 10px 0px 0px;
        }

        .section:nth-child(2){
            margin-top:10px;
            border-radius:0 0 10px 10px;
        }
    }

    .second_container{
        height: 250px;
        margin-left:-30px;
    }

    .content{
        display: flex;
        width: 90%;
        margin: 20px auto;
        flex-wrap: wrap;
    }

    .item:first-child{
        display: flex;
        flex-direction: column;
    }

    .item:nth-child(2){
        display: flex;
        flex-wrap: wrap;
    }

    .item:nth-child(3){
        display: inline-flex;
    }

    .item:last-child{
        width: 1000%;
        display: flex;
        justify-content: center;
        margin: 30px auto;
    }

    .item{
        width: calc(100%/4);
        margin: 0px 15px;
    }
`