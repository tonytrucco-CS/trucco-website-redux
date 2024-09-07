import EBTH from './EBTH';
import MindfullyApp from './MindfullyApp';
import MindfullyWeb from './MindfullyWeb';
import Pathfinder from './Pathfinder';
import TI4 from './TI4';
import WinHalf from './WinHalf';

const Project = ({ id }) => {
  switch (id) {
    case 'winhalf':
      return <WinHalf />;
    case 'ebth':
      return <EBTH />;
    case 'ti4':
      return <TI4 />;
    case 'mindfully-website':
      return <MindfullyWeb />;
    case 'mindfully-app':
      return <MindfullyApp />;
    case 'pathfinder':
      return <Pathfinder />;
    default:
      return null;
  }
};

export default Project;
