import styled from "styled-components";
import { breakpoints } from "../constants/variables";

const Div = styled.div`
  width: 100%;
  max-width: ${breakpoints.lg};
  margin: 0 auto;
  padding: 0 1rem;
`;

const Container = ({children, ...props}) => {
  return (
    <Div {...props}>
      {children}
    </Div>
  )
}

export default Container;