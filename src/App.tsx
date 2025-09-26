import './App.css'

function App() {
  return (
    <div className="app">
      <div className="scene">
        <div className="dog">
          <div className="head">
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="face">
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="nose"></div>
            </div>
          </div>
          <div className="body"></div>
          <div className="legs">
            <div className="leg"></div>
            <div className="leg"></div>
            <div className="leg"></div>
            <div className="leg"></div>
          </div>
          <div className="tail"></div>
        </div>
        <div className="skateboard">
          <div className="deck"></div>
          <div className="wheels">
            <div className="wheel"></div>
            <div className="wheel"></div>
            <div className="wheel"></div>
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App