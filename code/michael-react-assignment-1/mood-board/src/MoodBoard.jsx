import { useState } from "react";
import "./MoodBoard.css";

function MoodBoard({ name  }) {
  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
  ];

  const [currentMood, setCurrentMood] = useState("...");

  return (
    <div className="moodboard-component">
      <h2>{name} is feeling {currentMood} today</h2>
      <div className="emoji-container">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="emoji-btn"
            onClick={() => setCurrentMood(mood.description)}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodBoard;
