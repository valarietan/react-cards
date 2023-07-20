import React, {useState} from 'react'

export default function CardList({ cards, deleteCard, editCard }) { 
    const [editIndex, setEditIndex] = useState(null);
    const [editedCard, setEditedCard] = useState('');

    const handleEdit = (index, card) => {
        setEditIndex(index);
        setEditedCard(card);
      };
    
    const handleSave = (index) => {
        editCard(index, editedCard);
        setEditIndex(null);
      };

      return (
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                   <input
                type="text"
                value={editedCard}
                onChange={(e) => setEditedCard(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
            {todo}
              <button onClick={() => handleEdit(index, card)}>Edit</button>
              <button onClick={() => deleteCard(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
    