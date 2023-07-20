import React, {useState} from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  button {
    margin-left: 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 16px;
  }

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  `

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
        <List>
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
            {card}
              <button onClick={() => handleEdit(index, card)}>Edit</button>
              <button onClick={() => deleteCard(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </List>
  );
}
    