import { useState } from "react";
import "./MoodBoard.css";  // Import the CSS file

function MoodBoard({ name }) {
  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
  ];

  const [currentMood, setCurrentMood] = useState("...");

  return (
    <div className="mood-container">
      <h2 className="mood-title">
        {name ? `${name} is feeling ${currentMood} today` : `You are feeling ${currentMood} today`}
      </h2>
      <div className="mood-list">
        {moods.map((mood, index) => (
          <span
            key={index}
            className="mood-emoji"
            onClick={() => setCurrentMood(mood.description)}
          >
            {mood.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MoodBoard;
