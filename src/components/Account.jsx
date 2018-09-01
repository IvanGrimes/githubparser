import React from 'react';
import PropTypes from 'prop-types';

export default function Account({ value, handleChange, handleClick, disabled }) {
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
        disabled={disabled}
      >
        Find
      </button>
    </div>
  );
}

Account.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
