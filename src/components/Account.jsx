import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Account extends Component {
  render() {
    const { value, handleChange, handleClick } = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={value}
        />

        <button
          type="button"
          onClick={handleClick}
        >
          Find
        </button>
      </div>
    );
  }
}
