import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';


const DevicePage = () => {
    const icon = 'https://img.icons8.com/ios/452/star--v1.png';
    const device = { id: 2, name: 'iphone', price: 25000, rating: "5", img: 'https://img.mvideo.ru/Pdb/30052890b.jpg' };
    const description = [
        { id: 1, title: 'RAM', description: "5 gb" },
        { id: 2, title: 'ROM', description: "5 gb" },
        { id: 3, title: 'RUM', description: "5 gb" },
        { id: 4, title: 'RCM', description: "5 gb" },
    ];
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    {/* Разбиваем по 4 на 3 столбца */}
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${icon}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        // no repeat center center  чтобы звезда не повторялась и была по центру
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: {device.price}руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row
                        style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                        key={info.id}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container >
    );
};

export default DevicePage;