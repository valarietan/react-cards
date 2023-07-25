import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00bfff;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
`;

const CardSavedPage = () => {
  return (
    <Wrapper>
      <Title>Card Saved!</Title>
      <Message>Your card has been saved successfully.</Message>
    </Wrapper>
  );
};

export default CardSavedPage;
