import { useState } from 'react';

function MoodBoard() {
  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" }
  ];

  const [currentMood, setCurrentMood] = useState("neutral");

  const handleEmojiClick = (description) => {
    setCurrentMood(description);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Mood Board</h1>
      <p style={{ fontSize: '24px', margin: '20px' }}>
        You are feeling <strong>{currentMood}</strong> today
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {moods.map((mood, index) => (
          <span
            key={index}
            onClick={() => handleEmojiClick(mood.description)}
            style={{
              fontSize: '60px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {mood.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MoodBoard;
