import Camp from './Camp';
import HomeSpace from './HomeSpace';
import Minis from './Minis';
import Presidents from './Presidents';
import Snowpals from './Snow';

const Design = ({ id }) => {
  switch (id) {
    case 'camp-trucco':
      return <Camp />;
    case 'presidents':
      return <Presidents />;
    case 'miniatures':
      return <Minis />;
    case 'snowpals':
      return <Snowpals />;
    case 'homespace':
      return <HomeSpace />;
    default:
      return null;
  }
};

export default Design;
