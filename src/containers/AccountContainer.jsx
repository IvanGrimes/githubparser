import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getReposByName } from '../actions/Account';
import { getRepositoriesByYear } from '../actions/ReposList';
import { setYear } from '../actions/ReposList';
import getYears from "../utils/getUniqueYearsFromRepositories";

const mapStateToProps = store => ({
  account: store.account,
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories: (name, callback) => dispatch(getReposByName(name, callback)),
  onSuccessFetch: (repositories, year) => {
    dispatch(setYear(year));
    dispatch(getRepositoriesByYear(repositories));
  },
});

class AccountContainer extends Component {
  state = {
    value: '',
  };

  handleChange = (ev) => {
    const { value } = ev.target;

    this.setState({ value: value.trim() });
  };

  handleClick = (ev) => {
    const { account, fetchRepositories, onSuccessFetch } = this.props;
    const { value } = this.state;

    ev.preventDefault();

    const successCallback = (repositories) => {
      onSuccessFetch(repositories, Math.max.apply(null, getYears(repositories)));
    };

    if (value !== account.name) {
      fetchRepositories(value, successCallback);
    }

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <Account
        value={value}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
