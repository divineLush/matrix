import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const AppModal = (props) => {
    return (
        <Modal show={ props.show }>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button onClick={ props.onCancel }>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default AppModal;
