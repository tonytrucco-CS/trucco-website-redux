import styled from 'styled-components';
import ModalImage from 'react-modal-image';
import { Link } from 'react-router-dom';

const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb : null)};
`;

const Img = styled(ModalImage)`
  border-radius: ${(props) => (props.rounded ? '50%' : '0.25rem')};
  max-width: 100%;
  border: solid 1px ${({ theme }) => theme.border};
`;

const LinkImage = styled.img`
  border-radius: ${(props) => (props.rounded ? '50%' : '0.25rem')};
  max-width: 100%;
  border: solid 1px ${({ theme }) => theme.border};
`;

const ImageCard = ({ rounded = false, image, mb }) => {
  return (
    <Div mb={mb}>
      {image.href ? (
        <Link to={image.href}>
          <LinkImage src={image.src} alt={image.alt} />
        </Link>
      ) : (
        <Img
          rounded={rounded}
          small={image.src}
          medium={image.src}
          alt={image.alt}
          hideDownload
          hideRotate
          imageBackgroundColor={image.bg ? image.bg : '#FFFFFF'}
        />
      )}
      {image.description && <small>{image.description}</small>}
    </Div>
  );
};

export default ImageCard;
