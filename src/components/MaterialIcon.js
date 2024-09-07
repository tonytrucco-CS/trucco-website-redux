import styled from 'styled-components';

const Span = styled.span`
  font-size: ${(props) => (props.$size ? props.$size : null)};
`;

const MaterialIcon = ({ icon, size }) => {
  return (
    <Span className="material-symbols-outlined" $size={size}>
      {icon}
    </Span>
  );
};

export default MaterialIcon;
