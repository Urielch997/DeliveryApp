import styled from 'styled-components';
import chip from '@Img/Chip.png';
import visa from '@Img/Visa.png';

interface ICard {
    cardNumber:string,
    cvv:string,
    nameOwner:string
}

const CardCredit = ({cardNumber,cvv,nameOwner}:ICard) => {
    return (
        <Card>
            <div className='logo_type'>
                <img src={visa} alt="visa" width={"60px"} height={"30px"} />
            </div>
            <div>
                <img src={chip} alt="chip_img" width={"60px"} height={"60px"} />
            </div>
            <div className="number_card">
                {cardNumber}
            </div>
            <div className='data_card'>
                <div className="name">
                    {nameOwner}
                </div>
                <div className="expired_date">
                    {cvv}
                </div>
            </div>
        </Card>
    )
}

const Card = styled.div`
    width: 400px;
    height: 200px;
    color:#fff;
    border-radius: 10px;
    background: rgb(16,180,214);
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(16,180,214,0.9304315476190477) 19%, rgba(77,117,224,0.9612438725490196) 78%);

.number_card{
    font-family:'kreditFront';
    font-size: 25px;
    font-weight:bold;

}

.logo_type{
    display: flex;
    justify-content: flex-end;
}

.data_card{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
`;

export default CardCredit