import React from "react";
import MoodBoard from "./MoodBoard";

const moods = [
  { emoji: "😊", description: "happy" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "🤔", description: "thoughtful" },
  { emoji: "😄", description: "excited" },
  { emoji: "😌", description: "peaceful" },
];
const App = () => {
  return (
    <div style={{display:"flex", gap:"40px"}}>

      <MoodBoard person="Maame" Allmoods={moods} />
      <MoodBoard person="Jeffrey" Allmoods={moods} />
      <MoodBoard person="Alfred" Allmoods={moods} />
      <MoodBoard person="Kennedy" Allmoods={moods} />
    </div>
  );
};

export default App;
