import { Outlet } from 'react-router-dom';
import Gradient from '../components/Gradient';

const About = () => {
  return (
    <>
      <Gradient />
      <Outlet />
    </>
  );
};

export default About;
