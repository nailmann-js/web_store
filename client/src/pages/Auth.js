import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';


const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const histoty = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [show, setShow] = useState(true)

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user); // save data from user store
            user.setIsAuth(true);
            histoty.push(SHOP_ROUTE);
        }
        catch (e) {
            alert(e.response.data.message);
            // if (show) {
            //     console.log(e.response.data.message)
            //     return (
            //         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            //             <Alert.Heading>Oh snap! You got an authorization error!</Alert.Heading>
            //         </Alert>
            //     );
            // }
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
});

export default Auth;