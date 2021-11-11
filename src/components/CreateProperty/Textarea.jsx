import React from 'react';

const Textarea = (props) => {
  const newPropertyElement = React.createRef();

  const updatePropertyText = () => {
    const text = newPropertyElement.current.value;
    props.updateNewPropertyText(text);
  };

  const addNewProperty = (evt) => {
    if (newPropertyElement.current.value) {
      const type = evt.target.dataset.type;
      props.addNewProperty(type);
    }
  };

  return (
    <div className="textarea-wrapper">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="form d-flex flex-column">
            <div className="form-floating mb-3 position-relative">

            <textarea
              className="form-control textarea"
              placeholder="Ввести текст"
              ref={newPropertyElement}
              onChange={updatePropertyText}
              value={props.newPropertyText}
            />

              <label htmlFor="floatingTextarea">Добавить новое свойство</label>

              <button
                className="btn btn-secondary position-absolute top-0 end-0"
                type="reset"
                title="Очистить"
                onClick={props.deletePropertyText}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4 mx-auto">
          <button
            className="btn btn-success"
            data-type="plus"
            onClick={addNewProperty}
          >
            В Положительное
          </button>
          <button
            className="btn btn-danger"
            data-type="minus"
            onClick={addNewProperty}
          >
            В Отрицательное
          </button>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
