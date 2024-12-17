import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
   
    closeModal = () => {
        this.setState({
            show: false
        });
    };

    openModal = () => {
        this.setState({
            show: true
        });
    };

   
    render() {
        return (
            <Modal show={this.state.show} onHide={() => this.closeModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h5 className="modal-title" id={"modal_label-" + this.props.modalId}>
                        {this.props.modalTitle}
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.modalBody}
            </Modal.Body>
            <Modal.Footer>
                {this.props.modalActions}
            </Modal.Footer>
        </Modal>
        );
    }
}