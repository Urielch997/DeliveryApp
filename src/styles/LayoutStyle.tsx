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
    
    .container_button_header{
        width: 90%;
        margin:5px auto;

        .search{
            border:0px;
            box-shadow:1px 1px 1px rgba(0,0,0, 0.1);
            width: 350px;
            box-sizing: border-box;

            &:focus{
                outline:0px;
            }
        }

        .ubicacion{
            margin-left: 10px;
            font-weight: bold;
            background: var(--primary);
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

    @media screen and (max-width:600px){
        top: 0;
        position: sticky;
        background: var(--headerTheme);
        flex-direction: column-reverse;
        z-index:1000;

        .container_button_header{
            width: 100%;
            padding-bottom: 0px;
            .ubicacion{
                width: 100%;
                margin-left: 0;
                margin-top:10px;
            }

            .search{
            border:0px;
            box-shadow:1px 1px 1px rgba(0,0,0, 0.1);
            width: 100%;
            margin-top:10px;
        }
        }

        .shopping_cart{
            display: flex;
            justify-content: flex-end;
            width: 90%;    
        }
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
        min-height: 72vh;
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

    @media screen and (max-width:600px){
        position: sticky;
        bottom: 0;
    }
`