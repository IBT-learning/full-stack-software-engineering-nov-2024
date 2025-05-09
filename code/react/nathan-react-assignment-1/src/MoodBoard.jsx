import { useState } from "react";

const MoodBoard = ({ person = "Nathan", Allmoods }) => {
  const [moods, setMoods] = useState(Allmoods);

  const updateEmoji = (emoji) => {
    setMoods((prevMood) => {
      const newMoods = prevMood.map((mood) => {
        if (emoji === mood.emoji) {
          return { ...mood, emoji: mood.description };
        } else {
          return mood;
        }
      });

      return newMoods;
    });
  };

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {moods.map((mood) => (
        <span>
          {" "}
          {person} is feeling{" "}
          <span>
            {" "}
            <button onClick={() => updateEmoji(mood.emoji)}>
              {" "}
              {mood.emoji}
            </button>
          </span>{" "}
          today
        </span>
      ))}
    </ul>
  );
};

export default MoodBoard;
