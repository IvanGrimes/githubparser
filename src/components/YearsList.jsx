import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class YearsList extends Component {

  handleClick = (ev) => { // TODO: Переместить в контейнер
    const { textContent } = ev.target;
    const { setYear, getRepositoriesByYear, repositories } = this.props;

    ev.preventDefault();

    setYear(+textContent);
    getRepositoriesByYear(repositories)
  };

  renderTemplate() {
    const { years } = this.props;
    const items = years.map((year, index) => (
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
        {this.renderTemplate()}
      </Fragment>
    );
  }
}
