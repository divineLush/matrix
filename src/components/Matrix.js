import React from 'react';
import { renderList } from '../assets/utils'
import '../styles/Matrix.css'

const Matrix = (props) => {
    const renderCell = (num, key) =>
        <span key={ key } className="matrix__cell">{ num }</span>

    const renderRow = (row, key) =>
        renderList(row, renderCell)

    return (
        <div className="matrix">
            { renderList(props.matrix, renderRow) }
        </div>
    );
}

export default Matrix;
