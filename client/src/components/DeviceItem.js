import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts'
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const DeviceItem = ({ device }) => {
    const history = useHistory();
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image style={{ widt: 15, height: 15 }} src='https://img.icons8.com/ios/452/star--v1.png' />
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col >
    );
};

export default DeviceItem;