import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { calcMatrixElCoords } from '../assets/utils'

const AppModal = (props) => {
    const elements = props.selectedNums
      .map(num => calcMatrixElCoords(props.matrix, num))
      .sort((a, b) => a[0] - b[0])

    const matrixWidth = (() => {
      const areEqual = (() => {
        const arr = elements.map(el => el[1])

        return arr.every(el => el === arr[0])
      })()

      const calcWidth = () => {
        let max = -1
        let min = 6

        for (let i = 0; i < elements.length; i++) {
          const el = elements[i][1]
          if (el >= max)
            max = el

          if (el <= min)
            min = el
        }

        return Math.abs(max - min) + 1
      }

      return areEqual ? 1 : calcWidth()
    })()

    const checkboxVisibilities = elements
      .map(el => props.matrix[el[0]][el[1]] === 1 ? true : false)

    const renderGrid = () =>
      elements
        .map((el, key) =>
          <div key={ key } style={{ textAlign: 'center' }}>
            <input
              type="checkbox"
              checked={ checkboxVisibilities[key] }
              onChange={ () => props.checkboxHandler(el) }
            />
          </div>)

    const matrixStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${ matrixWidth }, 1fr)`
    }

    return (
        <Modal show={ props.show }>
          <Modal.Header>
            <Modal.Title>Edit matrix</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={ matrixStyle }>
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
