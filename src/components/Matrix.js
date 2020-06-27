import React from 'react';
import { renderList, doOverlap } from '../assets/utils'
import '../styles/Matrix.css'
import RectangleSelection from 'react-rectangle-selection'

const Matrix = (props) => {
    const renderCell = (num, key) =>
        <span key={ key } className="matrix__cell">{ num }</span>

    const renderRow = (row, key) =>
        renderList(row, renderCell)

    const onSelectHandler = (e, coords) => {
        const matrixCells = document.querySelector('.matrix').children
        for (let i = 0; i < matrixCells.length; i++)
            matrixCells[i].style.border = 'none'

        const selectedNums = []
        for (let i = 0; i < matrixCells.length; i++) {
            const domRect = matrixCells[i].getBoundingClientRect()
            if (doOverlap(coords, domRect)) {
                matrixCells[i].style.border = '3px solid green'
                selectedNums.push(i)
            }
        }
        props.setSelectedNums(selectedNums)
    }

    const selectionStyle = {
        backgroundColor: "rgba(0,0,255,0.4)",
        borderColor: "blue"
    }

    return (
        <RectangleSelection
            onSelect={ onSelectHandler }
            style={ selectionStyle }
        >
            <div className="matrix">
                { renderList(props.matrix, renderRow) }
            </div>
        </RectangleSelection>
    );
}

export default Matrix;
