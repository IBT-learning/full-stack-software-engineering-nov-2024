import { useState } from 'react';
import './mood.css';

  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
    { emoji: "😢", description: "sad"},
    { emoji: "😡", description: "angry"},
    { emoji: "🤒", description: "sick"}
  ];

  function Mood({name}){
    let [mood, setMood] = useState('____');

    return (
      <section className='moodboard'>
        <h2> {name} is feeling {mood} today!</h2>
        <div className='list'>
          {moods.map((mood, i) => (
            <button key={i} onClick={() => setMood(mood.description)}>
              {mood.emoji} <br /> {mood.description}
            </button>
          ))
          }
        </div>
      </section>
    )
  }

export default Mood;