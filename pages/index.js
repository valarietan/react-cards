import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from 'react'
import CardForm from '@/components/CardForm'
import CardList from '@/components/CardList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cards, setCards] = useState ([]);

  const addCard = (card) => {
    setCards([...cards, card]); 
  };

  const deleteCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  }
  return (
    <div>
      <h1>Cards Against Negativity</h1>
      <CardForm addCard={addCard} />
      <CardList cards={cards} deleteCard={deleteCard} />
    </div>
  );
}
