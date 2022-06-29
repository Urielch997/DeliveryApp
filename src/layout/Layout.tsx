import FormLogin from '@Components/Login/FormLogin';
import Modal from '@Components/Util/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Footer, Header } from '../styles/LayoutStyle';

interface Props {
    children: React.ReactFragment;
}

const Layout = ({ children }: Props) => {
    const history = useHistory();
    const uselocation = useLocation();
    const [open,setOpen] = useState(false);

    return (
        <Container>
            <Header>
                <div className='container_button'>
                    <input placeholder='Buscar un comercio' className='search br7 pd5' />
                    <button className='ubicacion br7 pd5'>Seleccionar ubicacion</button>
                </div>
            </Header>
            <div className='container_button'>
                {children}
            </div>
            <Footer>
                <div className={`option_footer ${uselocation.pathname === '/' && 'active'}`}>
                    <label onClick={() => history.push('/')} className='link'><strong><FontAwesomeIcon icon={'home'}/>INICIO</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/favoritos' && 'active'}`}>
                    <label onClick={() => history.push('/favoritos')} className='link'><strong><FontAwesomeIcon icon={'heart'}/>FAVORITOS</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/Orden' && 'active'}`}>
                    <label onClick={() => history.push('/Orden')} className='link'><strong><FontAwesomeIcon icon={'shopping-bag'}/>ORDENES</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/perfil' && 'active'}`}>
                    <label onClick={() => true ? setOpen(true) : history.push('/perfil')} className='link'><strong><FontAwesomeIcon icon={'user'}/>PERFIL</strong></label>
                </div>
            </Footer>
            <Modal seeModal={open} setSeeModal={setOpen} children={<FormLogin/>} width={"800px"}/>
        </Container>
    )
}

export default Layout;
