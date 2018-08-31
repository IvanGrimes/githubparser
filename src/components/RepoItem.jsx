import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RepoItem extends Component {
  render() {
    const { name, url, stars, date } = this.props;

    return (
      <div>
        <a href={url}>
          {name}
        </a>

        <span>
          {stars}
        </span>

        <span>
          {new Date(date).toDateString()}
        </span>
      </div>
    );
  }
}
