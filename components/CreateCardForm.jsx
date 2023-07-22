import { useState } from 'react';
import styled from 'styled-components'

const AppWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CreateCardForm = ({ onSave }) => {
  const [card, setCard] = useState('');

  const handleCardChange = (e) => {
    setCard(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(card);
    setCard('');
  };

  return (
    <AppWrapper onSubmit={handleSubmit}>
    <h2 className='text-2xl'>Create a new card</h2>
      <textarea 
        value={card}
        onChange={handleCardChange}
        placeholder="Type anything..."
        rows="7"
        cols="42"
        required
      />
      <button className='rounded-full hover:rounded-lg' type="submit">Save card</button>
    </AppWrapper>
  );
};

export default CreateCardForm;
