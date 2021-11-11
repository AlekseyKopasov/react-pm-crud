import React from 'react'

const PropertyItem = (props) => {
  const deleteHandler = (propertyId) => {
    props.deleteHandler(propertyId)
  }

  const moveHandler = (propertyId, propertyType) => {
    props.moveHandler(propertyId, propertyType)
  }

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span className="list-text">{ props.item.propertyText }</span>

      <button
        type="button"
        className="btn btn-outline-danger"
        title="Удалить из списка"
        onClick={ () => {deleteHandler(props.item.id)} }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-x" viewBox="0 0 16 16">
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      <button
        type="button"
        className="btn btn-outline-success"
        title={props.type === "plus" ? "Перенести в Отрицательное" : "Перенести в Положительное"}
        onClick={ () => {moveHandler(props.item.id, props.type)} }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
          <path
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
        </svg>
      </button>
    </li>
  );
};

export default PropertyItem;
