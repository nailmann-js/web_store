import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>BuyDevice</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {user.isAuth ?
                    <Nav className="mr-auto" style={{ color: "green" }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(ADMIN_ROUTE)
                            }>
                            Админ панель</Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(LOGIN_ROUTE)}
                            className="ms-2"
                        >
                            Выход
                            </Button>
                    </Nav>
                    :
                    <Nav className="mr-auto" style={{ color: 'black' }}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    );
});

export default NavBar;