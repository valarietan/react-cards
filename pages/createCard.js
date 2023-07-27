import React, {useState} from 'react';
import CreateCardForm from '@/components/CreateCardForm';

const CreateCardPage = () => {
  const [cards, setCards] = useState([]);

  const handleSaveCard = (card) => {
    // wip generate a unique ID for the new note with library like uuid
    const newCard = {
      content: card,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <CreateCardForm onSave={handleSaveCard} />
    </div>
  );
};

export default CreateCardPage




