import { transparentize } from "polished";
import styled, { css } from "styled-components"
import { colors } from "../constants/variables";
import Button from "./Button";

const Box = styled.div`
  background-color: ${colors.white};
  display: block;
  min-height: 50vh;
  border-radius: 0.125rem;
  ${props => {
    if (props.hero) {
      return css`
        box-shadow: 0 0.5rem 1rem ${transparentize(0.9, colors.black)};
        padding: 2rem;
      `;
    } else {
      return css`
        padding: 1rem;
        background-color: ${transparentize(0.97, colors.black)};
      `;
    }
  }}
`;

const Card = ({children, hero, to, linkText}) => {
  return (
    <Box hero={hero}>
      {children}
      {
        to && linkText &&
        <Button block to={to}>
          {linkText}
        </Button>
      }
    </Box>
  )
}

export default Card;