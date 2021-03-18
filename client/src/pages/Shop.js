import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Context } from '..';
import { fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {
    const { device } = useContext(Context);
    fetchTypes().then(data => device.setTypes(data))
    useEffect(() => {

    }, [])

    return (
        <Container>
            <Row>
                <Col className="mt-2" md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;