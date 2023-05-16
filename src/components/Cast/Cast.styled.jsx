import styled from '@emotion/styled';

export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 40px;
`;

export const Name = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  font-size: 20px;
  font-weight: 400px;
  text-align: center;
  margin-top: 10px;
`;

export const Character = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  border-radius: 15px;
  margin: 0 auto;
  justify-self: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Card = styled.div`
  border: 1px solid white;
  min-height: 100px;
  padding: 15px;
  border-radius: 15px;

  &:hover {
    border: 1px solid yellow;
  }
`;
