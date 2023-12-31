import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 
import CardSavedPage from '@/components/CardSavedPage';


const AppWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00bfff
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

const CreateCardForm = () => {
  const [card, setCard] = useState('');
  const [isCardSaved, setIsCardSaved] = useState(false);

  useEffect(() => {
    const savedCard = localStorage.getItem('savedCard');
    if (savedCard) {
      setIsCardSaved(true);
    }
  }, []);

  const handleCardChange = (e) => {
    setCard(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Checkpoint1')
    try {
      const response = await fetch(`http://127.0.0.1:8000/card`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: card }),
      });
      console.log('Checkpoint2')

      if (response.ok) {
        console.log('Checkpoint3')
        localStorage.setItem('savedCard', true);
        setIsCardSaved(true);
        setCard('');
      } else {
        console.error('Failed to save the card.');
      }
    } catch (error) {
      console.log('Checkpoint4')
      console.error('Error while saving the card:', error);
    }
  };

  if (isCardSaved) {
    return <CardSavedPage />
  }

return (
    <AppWrapper onSubmit={handleSubmit}>
      <Title>Create a new card</Title>
      <TextArea
        value={card}
        onChange={handleCardChange}
        placeholder="Type something nice about yourself..."
        maxLength={300}
        rows="7"
        required
      />
      <SubmitButton type="submit">Save it!</SubmitButton>
    </AppWrapper>
  );
};

export default CreateCardForm;

export async function getServerSideProps(context) {
  const response = await fetch(`http://127.0.0.1:8000/card`)
  const data = await response.json()
  console.log("data", data)
  return {
  props: {
  data
},
  };
}
  
  
  
  
  
  
  