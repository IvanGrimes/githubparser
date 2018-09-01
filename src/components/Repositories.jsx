import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Repositories extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  renderItems() {
    const { repositories } = this.props;

    return repositories.map((repository, index) => {
      const {
        name,
        url,
        stargazers_count,
        created_at,
      } = repository;

      return (
        <div key={+(new Date().getTime() / (index + 1)).toFixed()}>
          <a href={url}>
            {name}
          </a>

          <span>
            {stargazers_count}
          </span>

          <span>
            {new Date(created_at).toDateString()}
          </span>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}
