import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0px auto 40px;

  margin-top: 20px;
  max-width: 1200px;
  padding: 10px;
`;

export const Poster = styled.img`
  width: 300px;
  height: auto;
  margin-right: 20px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;

export const Score = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;

  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;

export const Overview = styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
`;

export const Genres = styled.div`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  display: flex;
  gap: 30px;
  color: white;

  & > span {
    border: 1px solid white;
    padding: 10px;

    border-radius: 10px;
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 40px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  font-size: 20px;
`;

export const AdditionalInfoTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.4;
  font-size: 20px;
`;

export const InfoLink = styled(NavLink)`
  margin-bottom: 5px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  box-shadow: 0 0 20px #eee;
  border-radius: 20px;
  text-decoration: none;
   &:hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
     border: 1px solid yellow;
    
  }
  &.active {
    color: yellow;
    border: 1px solid yellow;
`;
export const ContainerPoster = styled.div`
  display: flex;
`;
export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
