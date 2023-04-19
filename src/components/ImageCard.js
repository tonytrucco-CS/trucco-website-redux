import { transparentize } from 'polished';
import styled from 'styled-components';
import { colors } from '../constants/variables';
import ModalImage from 'react-modal-image';

const Img = styled(ModalImage)`
  border-radius: ${(props) => (props.rounded ? '50%' : '0.5rem')};
  max-width: 100%;
  box-shadow: 0 0.5rem 1rem ${transparentize(0.85, colors.black)};
`;

const ImageCard = ({ rounded = false, image }) => {
  return (
    <div>
      <Img
        rounded={rounded}
        small={image.src}
        medium={image.src}
        alt={image.alt}
        hideDownload
        hideRotate
        imageBackgroundColor={image.bg ? image.bg : '#FFFFFF'}
      />
      {image.description && <small>{image.description}</small>}
    </div>
  );
};

export default ImageCard;
