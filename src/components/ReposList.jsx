import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

export default class ReposList extends Component {
  render() {
    return (
      <div>
        <RepoItem />
        <RepoItem />
        <RepoItem />
      </div>
    );
  }
}
