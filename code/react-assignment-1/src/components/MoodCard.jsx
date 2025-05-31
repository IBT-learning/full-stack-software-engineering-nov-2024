import React, { useState } from "react";
import "../assets/css/style.css";

const moods = [
  { emoji: "😊", description: "happy" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "🤔", description: "thoughtful" },
  { emoji: "😄", description: "excited" },
  { emoji: "😌", description: "peaceful" },
  { emoji: "😎", description: "cool" },
];
const MoodCard = ({ name }) => {
  const [mood, setMood] = useState(moods[0].description);
  return (
    <>
      <div className="mood-card">
        <h1>
          {name
            ? `${name} is feeling ${mood} today`
            : `You are feeling ${mood} today`}
        </h1>
        <div className="emojis">
          {moods.map(({ emoji, description }) => (
            <span
              key={description}
              className="emoji"
              onClick={() => setMood(description)}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoodCard;
