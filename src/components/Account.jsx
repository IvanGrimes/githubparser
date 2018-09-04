import React from 'react';
import PropTypes from 'prop-types';
import './Account.css';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';

export default function Account({
  value, handleChange, handleClick, disabled,
}) {
  return (
    <div className="account">
      <input
        className="account__input"
        type="text"
        onChange={handleChange}
        value={value}
      />

      <button
        className="account__button"
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <IconContext.Provider value={{ className: 'account__button-icon' }}>
          <FaSearch />
        </IconContext.Provider>
      </button>
    </div>
  );
}

Account.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
