import styled, { css } from 'styled-components';
import { breakpoints } from '../constants/variables';
import ImageCard from './ImageCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  row-gap: ${(props) => props.gap};
  column-gap: 16px;
  margin-bottom: ${(props) => (props.mb ? props.mb : null)};

  @media only screen and (max-width: ${breakpoints.xs}) {
    row-gap: 16px;
    ${(props) => {
      switch (props.columns) {
        case 2:
          return css`
            grid-template-columns: 1fr;
          `;
        case 3:
          return css`
            grid-gap: 16px;
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
  gap = '16px',
  rounded = false,
  mb,
}) => {
  return (
    <Grid columns={columns} gap={gap} mb={mb}>
      {images.map((image, index) => {
        return (
          <ImageCard key={`image_${index}`} image={image} rounded={rounded} />
        );
      })}
    </Grid>
  );
};

export default ImageGrid;
