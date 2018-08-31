import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import YearItem from './YearItem';

export default class YearsList extends Component {
  render() {
    return (
      <Fragment>
        <YearItem />
        <YearItem />
        <YearItem />
        <YearItem />
        <YearItem />
      </Fragment>
    );
  }
}
