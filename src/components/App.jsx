import React, { Component, Fragment } from 'react';
import AccountContainer from '../containers/AccountContainer';
import YearsListContainer from '../containers/YearsListContainer';
import ReposListContainer from '../containers/ReposListContainer';

export default function App() {
  return (
    <Fragment>
      <AccountContainer />
      <YearsListContainer />
      <ReposListContainer />
    </Fragment>
  );
}
