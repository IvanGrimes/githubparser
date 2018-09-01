import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Account({ value, handleChange, handleClick }) {
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
