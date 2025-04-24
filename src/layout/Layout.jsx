// src/layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import SubNavbar from '../components/Navbar/SubNavbar';

const Layout = () => {
  return (
    <>

      <main >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
