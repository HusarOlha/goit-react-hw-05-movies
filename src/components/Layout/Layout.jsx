import { Outlet } from 'react-router-dom';
import { Header, NavMenu, NavItem, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <NavMenu>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/movies">Movies</Link>
          </NavItem>
        </NavMenu>
      </Header>
      <Outlet />
    </div>
  );
};
export default Layout;
