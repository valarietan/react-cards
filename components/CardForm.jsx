import React, { useState } from 'react'

export default function CardForm( {addCard} ) {
  const [card, setCard] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.trim() === '') return;
    addCard(card);
    setCard('');
  };

  <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new card..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
