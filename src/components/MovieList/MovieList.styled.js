import styled from '@emotion/styled';

export const ListContainer = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ListText = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
`;

export const ListItem = styled.ul`
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid white;
  &:hover {
    border: 1px solid yellow;
  }
`;

export const Image = styled.img`
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
