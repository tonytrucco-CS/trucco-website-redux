import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const CardImg = ({src, alt}) => {
  return (
    <Img
      src={src}
      alt={alt}
    />
  )
}

export default CardImg;