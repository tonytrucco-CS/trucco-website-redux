import styled, { useTheme } from 'styled-components';
import { breakpoints } from '../constants/variables';

const StyledHR = styled.hr`
  padding: 0;
  margin: 3em 0;
  border: solid 1px ${({ theme }) => theme.border};
  transition: border 0.3s;

  @media only screen and (max-width: ${breakpoints.sm}) {
    margin: 2em 0;
  }
`;

const Hr = () => {
  const theme = useTheme();

  return <StyledHR theme={theme} />;
};

export default Hr;
