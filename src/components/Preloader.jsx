import React from 'react';
import './Preloader.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
