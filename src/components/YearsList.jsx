import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import getYears from '../utils/getUniqueYearsFromRepositories';

export default class YearsList extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  handleClick = (ev) => {
    const { textContent } = ev.target;
    const { setYear, repositories, getRepositoriesByYear } = this.props;

    ev.preventDefault();

    setYear(+textContent);
    getRepositoriesByYear(repositories);
  };

  renderItems() {
    const { repositories } = this.props; // TODO: Send years to the ReposList state
    const items = getYears(repositories).map((year, index) => (
      <button
        type="button"
        key={+(new Date().getTime() / (index + 1)).toFixed()}
        onClick={this.handleClick}
      >
        {year}
      </button>
    ));

    return items;
  }

  render() {
    return (
      <Fragment>
        {this.renderItems()}
      </Fragment>
    );
  }
}
