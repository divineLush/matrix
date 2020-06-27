import React from 'react';
import { renderList, doOverlap } from '../assets/utils'
import '../styles/Matrix.css'
import RectangleSelection from 'react-rectangle-selection'

const Matrix = (props) => {
    const renderCell = (num, key) =>
        <span key={ key } className="matrix__cell">{ num }</span>

    const renderRow = (row, key) =>
        renderList(row, renderCell)

    return (
        <RectangleSelection
            onSelect={(e, coords) => {
                const matrixCells = document.querySelector('.matrix').children
                for (let i = 0; i < matrixCells.length; i++)
                    matrixCells[i].style.color = 'black'

                for (let i = 0; i < matrixCells.length; i++) {
                    const domRect = matrixCells[i].getBoundingClientRect()
                    console.log(doOverlap(coords, domRect))
                    if (doOverlap(coords, domRect))
                        matrixCells[i].style.color = 'green'
                }
             }}
            style={{
                backgroundColor: "rgba(0,0,255,0.4)",
                borderColor: "blue"
            }}
        >
            <div className="matrix">
                { renderList(props.matrix, renderRow) }
            </div>
        </RectangleSelection>
    );
}

export default Matrix;
