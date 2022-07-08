import FormLogin from '@Components/Login/FormLogin';
import Modal from '@Components/Util/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Footer, Header } from '../styles/LayoutStyle';
import { faHome, faShoppingBag, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { iconProps } from '@Utils/Tools/Utils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ShoopingCart from '@Components/ShoopingCart/ShoopingCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGoogleLogin } from '@react-oauth/google';

interface Props {
    children: React.ReactFragment;
}

const Layout = ({ children }: Props) => {
    const history = useHistory();
    const uselocation = useLocation();
    const [open, setOpen] = useState(false);
    const { Auth:{Logged,facebookLogin} } = useSelector((x: RootState) => x)

    return (
        <Container>
            <Header>
                <div className='container_button_header'>
                    <input placeholder='Buscar un comercio' className='search br7 pd5' />
                    <button className='ubicacion br7 pd5'>Seleccionar ubicacion</button>
                </div>
                <div className='shopping_cart'>
                    <ShoopingCart/>
                </div>
            </Header>
            <div className='container_button'>
                {children}
            </div>
            <Footer className='shadow_solid'>
                <div className={`option_footer ${uselocation.pathname === '/' && 'active'}`}>
                    <label onClick={() => history.push('/')} className='link'><strong><FontAwesomeIcon icon={iconProps(faHome as IconDefinition)} className="icon" /><span className='label_footer'>INICIO</span></strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/favoritos' && 'active'}`}>
                    <label onClick={() => history.push('/favoritos')} className='link'><strong><FontAwesomeIcon icon={iconProps(faHeart as IconDefinition)} className="icon" /><span className='label_footer'>FAVORITOS</span></strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/Orden' && 'active'}`}>
                    <label onClick={() => history.push('/Orden')} className='link'><strong><FontAwesomeIcon icon={iconProps(faShoppingBag as IconDefinition)} className="icon" /><span className='label_footer'>ORDENES</span></strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/perfil' && 'active'}`}>
                    <label onClick={() => Logged ? history.push('/perfil') : setOpen(true)} className='link'>{Logged ? <img src={facebookLogin.picture.data.url} alt='photo_profile' className='photo_profile'/> : <strong><FontAwesomeIcon icon={iconProps(faUser as IconDefinition)} className="icon" /> <span className='label_footer'>PERFIL</span></strong> }</label>
                </div>
            </Footer>
            <Modal seeModal={open} setSeeModal={setOpen} children={<FormLogin />} width={"800px"} height={"550px"}/>
        </Container>
    )
}

export default Layout;
