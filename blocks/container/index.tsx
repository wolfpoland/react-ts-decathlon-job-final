import styled, { keyframes } from 'styled-components';

const gradinet = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
}
  100% {
    background-position: 0% 50%
}
`;

const container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation ${gradinet} 15s ease infinite
`;


export default container;