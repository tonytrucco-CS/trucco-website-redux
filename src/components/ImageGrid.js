import styled, { css } from 'styled-components';
import { breakpoints } from '../constants/variables';
import ImageCard from './ImageCard';

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

const ImageGrid = ({
  columns = 3,
  images,
  gap = '1rem',
  rounded = false,
  description,
}) => {
  return (
    <Grid columns={columns} gap={gap}>
      {images.map((image, index) => {
        return (
          <ImageCard key={`image_${index}`} image={image} rounded={rounded} />
        );
      })}
    </Grid>
  );
};

export default ImageGrid;
