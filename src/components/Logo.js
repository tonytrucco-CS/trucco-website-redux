import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 50%;
  width: ${(props) => (props.small ? '32px' : '100%')};
  padding-bottom: ${(props) => (props.small ? '32px' : '100%')};
  background-color: #efefef;
  overflow: hidden;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => transparentize(0.75, theme.link)};
  }
`;

const Img = styled.img`
  width: 75%;
  height: 75%;
`;

const Logo = ({ small = true }) => {
  return (
    <Div small={small}>
      <StyledNavLink to="/" alt="Navigate to the home page">
        <Img src="/logo.svg" alt="" />
      </StyledNavLink>
    </Div>
  );
};

export default Logo;
