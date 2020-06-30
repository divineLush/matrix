import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { calcMatrixElCoords } from '../assets/utils'

const AppModal = (props) => {
    const elements = props.selectedNums
      .map(num => calcMatrixElCoords(props.matrix, num))
      .sort((a, b) => a[0] - b[0])

    const checkboxVisibilities = elements
      .map(el => props.matrix[el[0]][el[1]] === 1 ? true : false)

    const renderGrid = () =>
      elements
        .map((el, key) =>
          <input
            key={ key }
            type="checkbox"
            checked={ checkboxVisibilities[key] }
            onChange={ () => props.checkboxHandler(el) }
          />)

    return (
        <Modal show={ props.show } onHide={ () => {} }>
          <Modal.Header>
            <Modal.Title>Edit matrix</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              { renderGrid() }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ props.onCancel }>Cancel</Button>
            <Button onClick={ props.onConfirm }>Confirm</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default AppModal;
