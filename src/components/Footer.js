import styled from "styled-components";
import Container from "./Container";

const StyledFooter = styled.footer`
  width: 100%;
  border-top: solid 1px pink;
`;



const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        Footer
      </Container>
    </StyledFooter>
  )
}

export default Footer;