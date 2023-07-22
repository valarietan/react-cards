import { useState } from 'react';
import CreateNoteForm from '@/components/CreateCardForm';

const CreateCardPage = () => {
  const [cards, setCards] = useState([]);

  const handleSaveCard = (card) => {
    // how to generate a unique ID for the new note with library like uuid?
    const newCard = {
      id: Date.now(),
      content: card,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <h1>Create a new card</h1>
      <CreateCardForm onSave={handleSaveCard} />
    </div>
  );
};

export default CreateCardPage;
