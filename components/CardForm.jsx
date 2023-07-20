import React, {useState} from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-left: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 8px 16px;
  }
`

export default function CardForm( {addCard} ) {
  const [card, setCard] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.trim() === '') return;
    addCard(card);
    setCard('');
  };

  return(
  <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        placeholder="Add a new card..."
      />
      <button type="submit">Add</button>
    </FormWrapper>
  );
}


