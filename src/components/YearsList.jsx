import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class YearsList extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  get uniqueYears() { // TODO: Refactor it!
    const { repositories } = this.props;
    let years = new Set();

    repositories.forEach((repository) => {
      years.add(new Date(repository.created_at).getFullYear());
    });

    years = Array.from(years).sort((a, b) => a > b);

    return years;
  }

  handleClick = (ev) => {
    const { textContent } = ev.target;
    ev.preventDefault();

    console.log(+textContent);
  }

  renderItems() {
    const items = this.uniqueYears.map((year, index) => {
      return (
        <button
          type="button"
          key={+(new Date().getTime() / (index + 1)).toFixed()}
          onClick={this.handleClick}
        >
          {year}
        </button>
      );
    });

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
