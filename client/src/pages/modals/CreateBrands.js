import Modal from 'react-bootstrap/Modal';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Context } from '../..';
import { createBrand } from '../../http/deviceAPI';

const CreateBrands = ({ show, onHide }) => {
    const [brand, setBrand] = useState('');
    const create = () => {
        createBrand(brand).then((response) => {
            setBrand('');
            onHide();
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый бренд
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                        placeholder={"Введите название бренда"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={create}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrands;