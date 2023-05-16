import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background: url('https://cojo.ru/wp-content/uploads/2022/12/kinolenta-29.webp');
  box-shadow: 0px 2px 4px -1px white, 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px white;

  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export const NavItem = styled.li`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
`;
export const Link = styled(NavLink)`
   font-family: 'Montserrat', sans-serif;
  line-height: 1.2;
    font-size: 18px;
  margin: 10px;
  padding: 15px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 30px;
  display: block;
  text-decoration: none;

  &:hover {
    background-position: right center; 
    color: #fff;
    text-decoration: none;
    
  }
  &.active {
    color: yellow;
    border: 1px solid yellow;
   
`;
