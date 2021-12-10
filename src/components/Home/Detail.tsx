import styled from "styled-components"

const Detail = () => {
    return (
        <Wrapper>
            <div className="first_container">
                <div className="second_container">
                    <div className="title_second">
                        <div className="section">
                            <div className='title'>Subway</div>
                            <div>Test</div>
                        </div>
                        <div className="section">
                            <div className='title'>Horario</div>
                            <div>12:20</div>
                        </div>
                    </div>
                    <div className="third_container">
                        <div className="title_cards">
                            <label className="active">Sub</label>
                            <label>Combos</label>
                            <label>Bebidas</label>
                            <label>Extras</label>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 600px;
    width: 100%;
    margin: 10px 30px;

    .first_container, .second_container,.third_container{
        border-radius: 15px;
    }

    .first_container{
        object-fit: cover;
        background-image:url('/img/OIP.jpg');
        background-size: 100%;
        min-height: 400px;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .second_container{
        min-height: 300px;
        height: 85%;
        background: #ECECEC;
        width: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        justify-content: flex-end;

        .title_second{
            display: flex;
            width: 90%;
            margin: 5px auto;

            .section{
                width: 50%;
                text-align:center;

                .title{
                    font-size: 20px;
                    font-weight: 700;
                }
            }
        }
    }

    .third_container{
        min-height: 200px;
        height: 87%;
        width: 100%;
        background: #F7F7F7;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .title_cards{
            width: 60%;
            margin:5px auto;
            text-align: center;

            label{
                margin:5px 20px;
            }
        }
    }
`

export default Detail
