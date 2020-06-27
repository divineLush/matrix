import React from 'react';
import { renderList, doOverlap } from '../assets/utils'
import '../styles/Matrix.css'
import RectangleSelection from 'react-rectangle-selection'
import { Check, X } from 'react-bootstrap-icons'

const Matrix = (props) => {
    const renderCell = (num, key) =>
        num === 1
            ? <Check className="matrix__cell" key={ key } />
            : <X className="matrix__cell" key={ key } />

    const renderRow = (row, key) =>
        renderList(row, renderCell)

    const removeColoring = () => {
        const matrixCells = document.querySelector('.matrix').children
        for (let i = 0; i < matrixCells.length; i++)
            matrixCells[i].style.backgroundColor = 'inherit'

        return matrixCells
    }

    const onSelectHandler = (e, coords) => {
        const matrixCells = removeColoring()
        const selectedNums = []
        for (let i = 0; i < matrixCells.length; i++) {
            const domRect = matrixCells[i].getBoundingClientRect()
            if (doOverlap(coords, domRect)) {
                matrixCells[i].style.backgroundColor = '#cbefd4'
                selectedNums.push(i)
            }
        }
        props.setSelectedNums(selectedNums)
    }

    const onMouseUpHandler = () => {
        removeColoring()
        props.mouseUpHandler()
    }

    return (
        <RectangleSelection
            onSelect={ onSelectHandler }
            onMouseUp = { onMouseUpHandler }
            style={{ borderColor: "#d4cbef" }}
        >
            <div className="matrix">
                { renderList(props.matrix, renderRow) }
            </div>
        </RectangleSelection>
    );
}

export default Matrix;
