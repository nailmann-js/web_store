import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
    let [type, setType] = useState('');

    const create = () => {
        createType(type).then((response) => {
            setType('');
            onHide();
        });
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
                    Добавить новый тип
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        placeholder={"Введите название типа"}
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

export default CreateType;