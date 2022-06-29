import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;

    .shopping_cart{
        margin: 0px auto;
        cursor: pointer;
        font-size:20px;
    }
    
    .container_button{
        width: 90%;
        margin:5px auto;

        .search{
            border:0px;
            box-shadow:1px 1px 1px rgba(0,0,0, 0.1);
            width: 350px;

            &:focus{
                outline:0px;
            }
        }

        .ubicacion{
            margin-left: 10px;
            font-weight: bold;
            background: #fec405;
            border:0px;
            cursor: pointer;
        }
    }

    .pd5{
        padding: 5px;
    }

    .br7{
        border-radius: 7px;
    }
`

export const Container = styled.div`
    background:#f7f7f7f7;
    height: 100%;
    min-height: 100vh;
    box-sizing:border-box;
    position: relative;

    .icon{
        margin-right: 10px;
    }

    .container_button{
        width: 90%;
        margin:0px auto;
        padding-bottom: 81px;
    }
`

export const Footer = styled.div`
    background: #E9E7E7;
    display: flex;
    justify-content: center;
    align-items:center;

    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    .option_footer{
        width: calc(90%/4);
        text-align: center;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`