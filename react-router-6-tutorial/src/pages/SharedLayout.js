import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
