import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex flex-row">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3 mt-2"
                    style={{ cursor: 'pointer', width: 150 }}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;