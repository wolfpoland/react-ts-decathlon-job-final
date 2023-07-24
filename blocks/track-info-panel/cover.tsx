import styled from 'styled-components';

const cover = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 100%;
    height: 100%;
    max-height: 140px;
    max-width: 140px;
    border-radius: 5px;
  }

  @media (max-height: 100px){
    img{
      display: none;
      }
  }
`

export default cover;