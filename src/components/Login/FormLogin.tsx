import Button from '@Components/Util/Button';
import useFacebookLogin from '@Hooks/FormLogin/Social/useFacebookLogin';
import useFormL from '@Hooks/FormLogin/useFormL';
import facebookLogo from '@Img/facebooklogo.svg';
import googleLogo from '@Img/Google.svg';
import styled from 'styled-components';
import FormLog from './FormLog';
import FormRegister from './FormRegister';


const FormLogin = () => {
    const { changeType, typeForm } = useFormL();
    const {responseFacebook} = useFacebookLogin();


    return (
        <FormContainer>
            <div className='content'>
                <div className='formulario_container'>
                    <div>
                        <h3>{typeForm === "LOGIN" ? "INICIAR SESION" : "CREA UNA CUENTA!"}</h3>
                        <div className='header_container'>
                            <div>
                                <label>No tienes una cuenta?</label>
                            </div>
                            <div>
                                <label className='cursor' onClick={() => changeType(typeForm === "LOGIN" ? "REGISTER" : "LOGIN")}>{typeForm === "LOGIN" ? "Registrate" : "Iniciar sesion"}</label>
                            </div>
                        </div>
                    </div>
                    {typeForm === "LOGIN" ?
                        <FormLog />
                        :
                        <FormRegister />
                    }
                    <div>
                        <Button text={typeForm === "LOGIN" ? "Iniciar" : "Registrarme"} classButton="white border_social" />
                        <div className='line'>
                            <div className='line_divider' />
                            <div className='text_line'>o si prefieres</div>
                            <div className='line_divider' />
                        </div>
                        <Button text="" Icon={<img src={facebookLogo} className="facebooklogo" alt='facebooklogo' />} color="#1976D2" classButton='border_social' />
                        <Button text="" Icon={<img src={googleLogo} className="facebooklogo" alt='googleLogo' />} classButton="button_login_google border_social" />
                    </div>
                </div>
                <div className='img_example'>
                    <img className='img_style' src='https://res.cloudinary.com/agglobal-com/image/upload/v1643217143/fierros/ecommerce/undraw_empty_cart_co35.svg' alt='people' />
                </div>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    width: 100%;
    padding:20px;

    .content{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .img_example{
        width: 50%;
    }

    .item{
        box-sizing: border-box;
    }

    .item:nth-child(2){
        margin-top:15px;
    }

    .facebooklogo{
        width: 25px;
        fill:var(--primary)
    }

    .img_style{
        width: 100%;
        height: 80%;
        object-fit: contain;
    }

    .formulario_container{
        width: 40%;
    }

    .width_input{
        width: 100%;
        box-sizing: border-box;
    }

    .border_social{
        border-radius: 10px;
        margin-top: 10px;
    }

    .header_container{
        display: flex;
        justify-content: space-between;

        div:nth-child(2){
            color:var(--primary);
            font-weight: 600;
        }
    }

    .button_login_google{
        background:#F44336;
    }

    .container_check{
        margin-top:10px;
        display: flex;
    }

    .line{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:30px;

        .line_divider{
            width: 40%;
            height: 1px;
            background: #000;
        }

        .text_line{
            width: 80%;
            display: flex;
            justify-content: center;
        }

    }

    @media screen and (max-width:600px){
        padding: 0;
    .img_example{
        display: none;
    }

    .formulario_container{
        width: 90%;
    }
}

   
`

export default FormLogin