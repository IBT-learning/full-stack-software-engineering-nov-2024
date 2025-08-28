import { useState } from 'react'
import './MoodBoard.css'

function MoodBoard({ personName = "You" }) {
  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
  ]

  // State variable to track the current mood
  const [currentMood, setCurrentMood] = useState("neutral")

  // Function to handle emoji clicks
  const handleMoodClick = (description) => {
    setCurrentMood(description)
  }

  return (
    <div className="mood-board">
      <h2 className="mood-statement">
        {personName} {personName === "You" ? "are" : "is"} feeling {currentMood} today
      </h2>
      
      <div className="emoji-container">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="emoji-button"
            onClick={() => handleMoodClick(mood.description)}
            title={mood.description}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MoodBoard