import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoItem extends Component {
  render() {
    return (
      <div>
        <a href="#">Repository name</a>

        <p>Repository description</p>

        <span>Stars: 2</span>
        <span>Commits: 34</span>
      </div>
    );
  }
}
