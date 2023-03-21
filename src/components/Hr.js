import styled from 'styled-components';
import { defaults } from '../constants/variables';

const StyledHR = styled.hr`
  padding: 0;
  margin: 3rem 0;
  border: solid 1px ${defaults.border};
`;

const Hr = () => {
  return <StyledHR />;
};

export default Hr;
