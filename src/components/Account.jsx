import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Account extends Component {
  state = {
    value: '',
  };

  handleChange = (ev) => {
    const { value } = ev.target;

    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <input type="text" onChange={this.handleChange} value={value} />
    );
  }
}
