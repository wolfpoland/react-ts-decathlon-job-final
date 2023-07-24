import styled from 'styled-components';

import TimeLabel from './time-label';
import Input from './input';

const trackProgress = styled.div`
  flex: 2;
  display: flex;
  alig-items: center;
  justify-content: space-between;
`
trackProgress.TimeLabel = TimeLabel;
trackProgress.Input = Input;

export default trackProgress;