import FormLogin from '@Components/Login/FormLogin';
import Modal from '@Components/Util/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Footer, Header } from '../styles/LayoutStyle';
import { faHome, faShoppingBag, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { iconProps } from '@Utils/Tools/Utils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ShoopingCart from '@Components/ShoopingCart/ShoopingCart';

interface Props {
    children: React.ReactFragment;
}

const Layout = ({ children }: Props) => {
    const history = useHistory();
    const uselocation = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Header>
                <div className='container_button'>
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
            <Footer>
                <div className={`option_footer ${uselocation.pathname === '/' && 'active'}`}>
                    <label onClick={() => history.push('/')} className='link'><strong><FontAwesomeIcon icon={iconProps(faHome as IconDefinition)} className="icon" />INICIO</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/favoritos' && 'active'}`}>
                    <label onClick={() => history.push('/favoritos')} className='link'><strong><FontAwesomeIcon icon={iconProps(faHeart as IconDefinition)} className="icon" />FAVORITOS</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/Orden' && 'active'}`}>
                    <label onClick={() => history.push('/Orden')} className='link'><strong><FontAwesomeIcon icon={iconProps(faShoppingBag as IconDefinition)} className="icon" />ORDENES</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/perfil' && 'active'}`}>
                    <label onClick={() => true ? setOpen(true) : history.push('/perfil')} className='link'><strong><FontAwesomeIcon icon={iconProps(faUser as IconDefinition)} className="icon" />PERFIL</strong></label>
                </div>
            </Footer>
            <Modal seeModal={open} setSeeModal={setOpen} children={<FormLogin />} width={"800px"} />
        </Container>
    )
}

export default Layout;
