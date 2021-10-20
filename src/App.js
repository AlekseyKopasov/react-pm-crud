import './App.css'

function App() {
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-4 mx-auto">
          <h1 className="title text-center">
            Plus
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
              <path
                d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z"/>
            </svg>
            Minus</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="form d-flex flex-column">
            <div className="form-floating mb-3 position-relative">
              <textarea className="form-control textarea" placeholder="Ввести текст" id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Добавить новое свойство</label>
              <button className="btn btn-secondary position-absolute top-0 end-0" type="reset" title="Очистить">
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
          <div className="btn btn-success">В Положительное</div>
          <div className="btn btn-danger">В Отрицательное</div>
        </div>
      </div>

      <div className="list-wrapper mt-5">
        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Plus</h2>
            <div className="list-group list-group-numbered">

              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span>1</span>
                <span className="list-text">A second link item</span>
                <button type="button" className="btn btn-outline-danger" title="Удалить из списка">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-x" viewBox="0 0 16 16">
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
                <button type="button" className="btn btn-outline-success" title="Перенести в Отрицательное">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="col-6">
            <h2 className="text-center">Minus</h2>
            <div className="list-group list-group-numbered">
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                <span>1</span>
                <span className="list-text">A second link A second link A second linkA second link A second link A second linkA second link A second link A second link A second link A second link item</span>
                <button type="button" className="btn btn-outline-danger align-self-start" title="Удалить из списка">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-x" viewBox="0 0 16 16">
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
                <button type="button" className="btn btn-outline-success" title="Перенести в Положительное">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
