import React from 'react'

const AllCards = ({cards}) => {
    return (
        <ul>
            {cards.map((card)=> (
                <li key={card.id}>
                <span>{card.text}</span>
                <button><Read></button>
                </li>
            ))}
        </ul>
      );
}; 
 
export default AllCards;

