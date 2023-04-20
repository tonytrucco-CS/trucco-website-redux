import { Outlet } from 'react-router-dom';
import Gradient from '../components/Gradient';

const Process = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  );
};

export default Process;
