import React, { Fragment } from 'react';
import AccountContainer from '../containers/AccountContainer';
import YearsListContainer from '../containers/YearsContainer';
import RepositoriesContainer from '../containers/RepositoriesContainer';
import PreloaderContainer from '../containers/PreloaderContainer';

export default function App() {
  return (
    <Fragment>
      <AccountContainer />
      <YearsListContainer />
      <PreloaderContainer />
      <RepositoriesContainer />
    </Fragment>
  );
}
