import { faHeart, faHome, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Footer, Header } from '../styles/LayoutStyle';

interface Props {
    children: React.ReactFragment;
}

const Layout = ({ children }: Props) => {
    const history = useHistory();
    const uselocation = useLocation();


    

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
                    <label onClick={() => history.push('/')} className='link'><strong><FontAwesomeIcon icon={faHome}/>INICIO</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/favoritos' && 'active'}`}>
                    <label onClick={() => history.push('/favoritos')} className='link'><strong><FontAwesomeIcon icon={faHeart}/>FAVORITOS</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/Orden' && 'active'}`}>
                    <label onClick={() => history.push('/Orden')} className='link'><strong><FontAwesomeIcon icon={faShoppingBag}/>ORDENES</strong></label>
                </div>
                <div className={`option_footer ${uselocation.pathname === '/perfil' && 'active'}`}>
                    <label onClick={() => history.push('/perfil')} className='link'><strong><FontAwesomeIcon icon={faUser}/>PERFIL</strong></label>
                </div>
            </Footer>
        </Container>
    )
}

export default Layout;
