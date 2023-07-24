import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetSession, ActionTypes } from '../store/actions/session';
import Container from '../blocks/container/index';
import LayoutStyled from '../blocks/layout/index';
import Panel from './panel';
import TrackList from './track-list';

interface LayoutProps {
  dispatch: Function;
}

class Layout extends Component<LayoutProps> {
  componentDidMount() {
    console.log('props: ', this.props);
    const { dispatch } = this.props;
    dispatch(new GetSession().plainAction())

  }

  render() {
    return (
      <Container>
        <LayoutStyled>
          <Panel />
          <TrackList />
        </LayoutStyled>
      </Container>
    );
  }
}

const mapStateToPorps = state => {
  return {}
}

export default connect(mapStateToPorps)(Layout);