import { useState } from 'react'
import './App.css'

function App() {
  const [boards, setBoards] = useState([])
  const [currentBoard, setCurrentBoard] = useState(null)

  const createBoard = () => {
    const newBoard = {
      id: Date.now(),
      title: `Mood Board ${boards.length + 1}`,
      items: []
    }
    setBoards([...boards, newBoard])
    setCurrentBoard(newBoard)
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Mood Board App</h1>
        <p>By Henry Ogun - SoundMasterH1</p>
        <button onClick={createBoard} className="create-btn">
          Create New Board
        </button>
      </header>

      <main className="app-main">
        {currentBoard ? (
          <div className="board-container">
            <h2>{currentBoard.title}</h2>
            <div className="board-canvas">
              <p>Drag and drop images, colors, and text here to create your mood board!</p>
            </div>
          </div>
        ) : (
          <div className="welcome">
            <h2>Welcome to your Mood Board App</h2>
            <p>Create visual inspiration boards for your creative projects</p>
            <button onClick={createBoard} className="create-btn large">
              Get Started
            </button>
          </div>
        )}

        {boards.length > 0 && (
          <div className="boards-list">
            <h3>Your Boards</h3>
            <div className="boards-grid">
              {boards.map(board => (
                <div 
                  key={board.id} 
                  className="board-card"
                  onClick={() => setCurrentBoard(board)}
                >
                  <h4>{board.title}</h4>
                  <p>{board.items.length} items</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App