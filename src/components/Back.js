import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Back = ({ to, label }) => {
  return (
    <Div>
      <Link to={to}>{label}</Link>
    </Div>
  );
};

export default Back;
