import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Years.css';

export default class Years extends Component {
  static propTypes = {
    years: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    currentYear: PropTypes.number.isRequired,
  };

  renderTemplate() {
    const { years, handleClick, currentYear } = this.props;

    return years.map((year, index) => {
      const id = +(new Date().getTime() / (index + 1)).toFixed();
      return (
        <button
          key={id}
          className={`years__button ${year === currentYear ? 'years__button--active' : ''}`}
          type="button"
          onClick={handleClick}
        >
          {year}
        </button>
      );
    });
  }

  render() {
    return (
      <div className="years">
        {this.renderTemplate()}
      </div>
    );
  }
}
