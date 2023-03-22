import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../constants/variables';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: ${(props) => props.gap};
  margin-bottom: 1rem;

  @media only screen and (max-width: ${breakpoints.xs}) {
    ${(props) => {
      switch (props.columns) {
        case 2:
          return css`
            grid-template-columns: 1fr;
          `;
        case 3:
          return css`
            grid-gap: 1rem;
          `;
        case 4:
          return css`
            grid-template-columns: repeat(2, 1fr);
          `;
        default:
          return css``;
      }
    }}
  }
`;

const Img = styled.img`
  border-radius: ${(props) => (props.rounded ? '50%' : '0.5rem')};
  max-width: 100%;
  box-shadow: 0 0.5rem 1rem ${transparentize(0.85, colors.black)};
`;

const ImageGrid = ({ columns = 3, images, gap = '1rem', rounded = false }) => {
  return (
    <Grid columns={columns} gap={gap}>
      {images.map((image, index) => {
        return (
          <Img
            rounded={rounded}
            key={`image_${index}`}
            src={image.src}
            alt={image.alt}
          />
        );
      })}
    </Grid>
  );
};

export default ImageGrid;
