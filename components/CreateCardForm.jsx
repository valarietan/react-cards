import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const AppWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  display: block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #FBBF24;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F59E0B;
  }
`;

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
      <Title>Create a new card</Title>
      <TextArea
        value={card}
        onChange={handleCardChange}
        placeholder="Type something good..."
        maxLength={300}
        rows="7"
        required
      />
      <SubmitButton type="submit">Save it!</SubmitButton>
    </AppWrapper>
  );
};

export default CreateCardForm;
