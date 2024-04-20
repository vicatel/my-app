import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import React from "react";

// import styles from "@/styles/New.module.scss";





// Modal to add html as modal body content , can be static backdrop/ regular
function VerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            backdrop= {props.backdrop}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton className={` ${styles.darkblue}`} > */}
            <Modal.Header closeButton className={` `} >
                <Modal.Title id="contained-modal-title-vcenter" >
                    Thank You!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ wordWrap: "break-word" }}>
                {props.text}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className={` `}>Close</Button>
                {/* <Button onClick={props.onHide} className={` ${styles.primarybtn}`}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}

export default VerticallyCenteredModal;