import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../components/RepoItem';

export default class ReposList extends Component {
  renderItems() {
    const { repositories, year } = this.props;

    return repositories.map((repository, index) => {
      const repositoryYear = new Date(repository.created_at).getFullYear();

      if (repositoryYear === year) {
        const { name, url, stargazers_count, created_at } = repository;
        return (
          <RepoItem
            key={+(new Date().getTime() / (index + 1)).toFixed()}
            name={name}
            url={url}
            stars={stargazers_count}
            date={created_at}
          />
        );
      }
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
