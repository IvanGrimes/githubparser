import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Years.css';
import { CSSTransition } from 'react-transition-group';

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
        <CSSTransition
          key={id}
          in={year === currentYear}
          classNames="years__button-"
          timeout={200}
          appear
        >
          <button
            className="years__button"
            type="button"
            onClick={handleClick}
          >
            {year}
          </button>
        </CSSTransition>
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
