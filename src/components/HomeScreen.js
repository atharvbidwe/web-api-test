import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const Tile = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }
`;

const editions = [
  { name: 'Standard', color: '#4CAF50' },
  { name: 'Hogwarts', color: '#9C27B0' },
  { name: 'Magic', color: '#2196F3' },
  { name: 'Football', color: '#FF9800' },
  { name: 'Summer', color: '#E91E63' },
  { name: 'Holiday', color: '#00BCD4' }
];

const HomeScreen = () => {
  return (
    <HomeContainer>
      <Title>Choose Your Edition</Title>
      <TileGrid>
        {editions.map((edition) => (
          <Tile key={edition.name} style={{ borderTop: `5px solid ${edition.color}` }}>
            <h2>{edition.name}</h2>
            <p>Explore the {edition.name} Edition</p>
          </Tile>
        ))}
      </TileGrid>
    </HomeContainer>
  );
};

export default HomeScreen;
