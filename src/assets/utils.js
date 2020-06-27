export const renderList = (list, renderer) =>
    list.map((el, key) => renderer(el, key))

export const doOverlap = (coords, domRect) => {
    const x1 = Math.min(coords.origin[0], coords.target[0])
    const y1 = Math.min(coords.origin[1], coords.target[1])
    const x2 = Math.max(coords.origin[0], coords.target[0])
    const y2 = Math.max(coords.origin[1], coords.target[1])

    const isValueInRange = (value, min, max) =>
        value >= min && value <= max

    const xOverlap = isValueInRange(x1, domRect.x, domRect.right) ||
        isValueInRange(domRect.x, x1, x2)

    const yOverlap = isValueInRange(y1, domRect.y, domRect.bottom) ||
        isValueInRange(domRect.y, y1, y2)

    return xOverlap && yOverlap
}

export const calcMatrixElCoords = (matrix, idx) => {
    let k = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            k += 1
            if (k === idx)
                return [i, j]
        }
    }

    return [-1, -1]
}
