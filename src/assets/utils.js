export const renderList = (list, renderer) =>
    list.map((el, key) => renderer(el, key))
