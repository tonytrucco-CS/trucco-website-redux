import { Outlet } from 'react-router-dom';
import Gradient from '../components/Gradient';

const Resume = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  );
};

export default Resume;
