import React, { Component, Fragment } from 'react';
import AccountContainer from '../containers/AccountContainer';
import YearsListContainer from '../containers/YearsListContainer';
import ReposListContainer from '../containers/ReposListContainer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AccountContainer />
        <YearsListContainer />
        <ReposListContainer />
      </Fragment>
    );
  }
}
