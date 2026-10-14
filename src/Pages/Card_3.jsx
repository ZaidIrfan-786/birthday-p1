import React from 'react'

const GiftCard = ({ onComplete }) => {

  const funFacts = [

    "✨ You make me smile in a way no one else can—effortlessly, brightly, and without even trying. Just thinking about you, hearing your voice, or seeing your name pop up on my screen instantly lifts my mood and turns my whole day around. Thank you for being my favorite reason to smile every single day.",
    "✨ Youre so much kinder than you realize. Its in the quiet way you notice things no one else does, the gentle warmth you bring into every corner of my soul, and how effortlessly you make the world feel softer just by being in it. You give so much of your heart without ever asking for credit, but I see it all. Having you in my life is a reminder of how beautiful genuine kindness really is.",
    "✨ You make ordinary days special without even trying. The most routine, quiet moments—a slow afternoon, a simple conversation, suddenly feel full of life and meaning the second you are part of them. You have this rare, beautiful way of turning the simplest parts of a day into memories I catch myself replaying long after. Life with you isn't just brighter; it feels richer, warmer, and so much more complete."
  ]
   
const sty = {
  textAlign: 'left',
}

  return (
    <div className="card">
      <h1>Fun Facts</h1>
      <br />
      <div style={sty}>
      <h3>Did You Know?</h3>

      <ul style={        {listStyle: 'none'}      }>
        {funFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      </div>
      <button onClick={onComplete}>Tell me more → </button>
      
    </div>
  )
}

export default GiftCard