import React from 'react';
import { MdSkipPrevious, MdPause, MdSkipNext } from "react-icons/md";

import ControlsStyled from '../blocks/controls/index';

const controls = () => (
  <ControlsStyled>
    <ControlsStyled.Icon>
      <MdSkipPrevious />
    </ControlsStyled.Icon>

    <ControlsStyled.Icon>
      <MdPause />
    </ControlsStyled.Icon>

    <ControlsStyled.Icon>
      <MdSkipNext />
    </ControlsStyled.Icon>
  </ControlsStyled>
);

export default controls;