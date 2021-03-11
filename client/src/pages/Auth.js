import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-4'>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className="mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нужен аккаунт?) <NavLink style={{ padding: 0 }} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Уже есть аккаунт?) <NavLink style={{ padding: 0 }} to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3 mx-3"
                            onClick={click}
                            variant={"outline-primary"}
                        >
                            {isLogin ? 'Войти' : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card >
        </Container >
    );
};

export default Auth;