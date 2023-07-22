import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default CreateCardForm;
