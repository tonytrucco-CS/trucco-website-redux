import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  background-color: #efefef;
  overflow: hidden;
  `;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
`;

const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Logo = () => {
  return (
    <Div>
      <StyledNavLink to="/" alt="Navigate to the home page">
        <Img src="/logo.svg" alt="" />
      </StyledNavLink>
    </Div>
  )
}

export default Logo;