import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, NavMenu, NavItem, Link } from './Layout.styled';
import { ThreeDots } from 'react-loader-spinner';

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
      <Suspense
        fallback={
          <div style={{ marginLeft: '420px', marginRight: 'auto' }}>
            <ThreeDots>
              height="80" width="80" radius="13" color="white"
              ariaLabel="three-dots-loading" wrapperStyle={{}}
              wrapperClassName="" visible={true}
            </ThreeDots>
          </div>
        }
      ></Suspense>
      <Outlet />
    </div>
  );
};
export default Layout;
