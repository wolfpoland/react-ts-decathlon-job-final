import styled from 'styled-components';

const Text = styled.p`
  margin-bottom: ${props => props.marginBottom || '5px'};
  font-size: ${props => props.fontSize || '16px'}
  font-weight: ${props => !!props.bold ? 'bold' : 'lighter'}
  display: ${props => !!props.height && props.height < 400 ? 'none' : 'block'}
`

export { Text };