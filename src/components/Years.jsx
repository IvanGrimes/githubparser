import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Years extends Component {
  static propTypes = {
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  renderTemplate() {
    const { years, handleClick } = this.props;
    const buttons = years.map((year, index) => (
      <button
        type="button"
        key={+(new Date().getTime() / (index + 1)).toFixed()}
        onClick={handleClick}
      >
        {year}
      </button>
    ));

    return buttons;
  }

  render() {
    return (
      <Fragment>
        {this.renderTemplate()}
      </Fragment>
    );
  }
}
