import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Years extends Component {
  renderTemplate() {
    const { years, handleClick } = this.props;
    const items = years.map((year, index) => (
      <button
        type="button"
        key={+(new Date().getTime() / (index + 1)).toFixed()}
        onClick={handleClick}
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
