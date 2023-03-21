import { Outlet } from 'react-router-dom';
import Gradient from '../components/Gradient';

const Contact = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  );
};

export default Contact;
