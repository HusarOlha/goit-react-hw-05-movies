import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const ArrowLink = styled.span`
  vertical-align: middle;
  margin-left: 10px;

  display: inline-block;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid white;
  border-bottom: 10px solid transparent;
  color: white;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100px;
  gap: 4px;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 10px;

  &:hover {
    box-shadow: 0 0 20px yellow;
    border-radius: 20px;
  }
`;
