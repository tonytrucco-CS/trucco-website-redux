import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  border: solid 1px ${({ theme }) => theme.border};
  transition: border 0.3s;
  border-radius: 4px;
`;

const CardImg = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

export default CardImg;
