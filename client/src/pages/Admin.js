import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrands from './modals/CreateBrands';
import CreateDevice from './modals/CreateDevice';
import CreateType from './modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrands show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    );
};

export default Admin;