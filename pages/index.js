import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
import CreateCardForm from '@/components/CreateCardForm'
import Post from '@/components/Post'
import styled from 'styled-components'

const AppWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cards, setCards] = useState ([]);

  const addCard = (card) => {
    setCards([...cards, card]); 
  };

  const deleteCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  }; 

  const editCard = (index, updatedCard) => {
    const updatedCards = [...cards];
    updatedCards[index] = updatedCard;
    setCards(updatedCards);
  };

  return (
    <AppWrapper>
      <CreateCardForm addCard={addCard} />
    </AppWrapper>
  );
}
