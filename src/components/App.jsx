import React, { Component, Fragment } from 'react';
import AccountContainer from '../containers/AccountContainer';
import YearsListContainer from '../containers/YearsContainer';
import ReposListContainer from '../containers/RepositoriesContainer';

export default function App() {
  return (
    <Fragment>
      <AccountContainer />
      <YearsListContainer />
      <ReposListContainer />
    </Fragment>
  );
}
