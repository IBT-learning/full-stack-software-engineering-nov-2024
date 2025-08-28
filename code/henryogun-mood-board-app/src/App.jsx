import MoodBoard from './components/MoodBoard'
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Mood Board App</h1>
        
        {/* Single mood board */}
        <MoodBoard />
        
        {/* Extra Challenge: Multiple people with their own mood states */}
        <MoodBoard personName="Ani" />
        <MoodBoard personName="Ayo" />
        <MoodBoard personName="Sam" />
      </div>
    </>
  )
}

export default App