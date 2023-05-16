import styled from '@emotion/styled';

export const ListContainer = styled.div``;

export const ListText = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
`;

export const ListItem = styled.ul`
  text-align: center;

  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Image = styled.img`
  transition: transform 0.3s ease-in-out;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ListTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;

export const List = styled.li`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  &:hover {
    border: 1px solid yellow;
  }
`;
