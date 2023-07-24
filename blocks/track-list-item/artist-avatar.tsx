import styled from 'styled-components';

const artistAvatar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  position: relative;

  img{
    max-width: 90px;
    max-height: 50px;
    border-radius: 50%;
  }
`;

export default artistAvatar;