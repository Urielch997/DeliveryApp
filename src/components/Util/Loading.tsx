import styled from "styled-components"

const Loading = () => {
    return (
        <Load>
            <div className="carga"></div>
            <div className="text_loading">
                <label>Cargando...</label>
                <div className="cover_text"></div>
            </div>
        </Load>
    )
}

const Load = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    .carga{
        border-left:5px solid var(--primary);
        border-top:5px solid var(--primary);
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-radius: 50%;
        height: 150px;
        width: 150px;
        animation-name: loading ;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: initial;
        animation-direction: normal;
        animation-play-state: running; 
        animation-timing-function: linear;
    }

    .carga::before{
        content: "";
        border-left:5px solid #ff6f00;
        border-top:5px solid #ff6f00;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        height: 140px;
        width: 140px;
        border-radius: 50%;
        z-index: 1000;
        position: absolute;
        animation-name: loading;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-fill-mode: initial;
        animation-direction: normal;
        animation-play-state: running; 

    }

    .text_loading{
        overflow: hidden;
        width: 100px;
        height: 40px;
        position: relative;
    }

    .cover_text{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #f7f7f7f7;
        opacity: 1;
        animation-name: animationCover;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: unset;
        animation-play-state: running; 
        animation-direction:normal ;
        animation-fill-mode: backwards;
    }

    @keyframes animationCover {
        0%{
            left:0;
        }

        10%{
            left:11px;
        }

        20%{
            left:20px;
        }

        30%{
            left:26px;
        }

        40%{
            left:35px;
        }

        50%{
            left:43px;
        }

        60%{
            left:52px;
        }

        70%{
            left:62px;
        }

        80%{
            left:72px;
        }

        90%{
            left:85px;
        }

        100%{
            left:0px
        }
    }

    @keyframes loading {
        0%{
            transform: rotateZ(0deg);
        }

        25%{
            transform: rotateZ(90deg);
        }

        50%{
            transform: rotateZ(180deg);
        }

        100%{
            transform: rotateZ(360deg);
        }
    }
`

export default Loading
