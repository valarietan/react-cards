import React from 'react'

export default function CardList({ cards, deleteCard }) { 
    return (
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              {card}
              <button onClick={() => deleteCard(index)}>Delete</button>
            </li>
          ))}
        </ul>
      );
  )
}
