import './App.css'
import AddProperty from './components/PropertyTextarea/PropertyTextarea'
import DistributeButtons from './components/DistributeButtons/DistributeButtons'
import PropertyList from './components/PropertyList/PropertyList'

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

      <AddProperty />
      <DistributeButtons />
      <PropertyList />
    </div>
  )
}

export default App
