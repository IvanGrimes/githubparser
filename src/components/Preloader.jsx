import React from 'react';
import PropTypes from 'prop-types';
import './Preloader.css';
import { CSSTransition } from 'react-transition-group';

export default function Preloader({ isFetching }) {
  return (
    <CSSTransition
      classNames="preloader-"
      timeout={500}
      in={isFetching}
    >
      <div className="preloader">&nbsp;</div>
    </CSSTransition>
  );
}

Preloader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};
