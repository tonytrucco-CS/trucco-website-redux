import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

const Main = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default Main;