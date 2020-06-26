import React from 'react';
import { renderList } from '../assets/utils'

const Matrix = (props) => {
    const renderCell = (num, key) =>
        <span key={ key }>{ num }</span>

    const renderRow = (row, key) =>
        <div key={ key }>
            { renderList(row, renderCell) }
        </div>

    return (
        <div>
            { renderList(props.matrix, renderRow) }
        </div>
    );
}

export default Matrix;
