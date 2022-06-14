import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';


function Notifications() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Notifications
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{color: 'black'}}>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ToastContainer>
                        <Toast animation bg='dark' show={showToast} onClose={toggleShowToast}>
                            <Toast.Header closeVariant='dark'>
                                <strong className="me-auto">Listing!</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Raaif listed an item!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Notifications;