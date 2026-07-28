import React from 'react'

const GiftCard = ({ onComplete }) => {

  const funFacts = [

    "✨ You make people smile.",
    "✨ You're kinder than you realize.",
    "✨ You make ordinary days special."
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