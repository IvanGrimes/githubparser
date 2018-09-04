import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getRepositories, filterByYear } from '../actions/repositoriesActions';
import getUniqueYearsFromRepositories from '../utils/getUniqueYearsFromRepositories';

const mapStateToProps = store => ({
  user: store.repositories.user,
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories: (name, callback) => dispatch(getRepositories(name, callback)),
  onSuccessFetch: (year) => {
    dispatch(filterByYear(year));
  },
});

class AccountContainer extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    fetchRepositories: PropTypes.func.isRequired,
    onSuccessFetch: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (ev) => {
    const { value } = ev.target;

    this.setState({ value: value.trim() });
  };

  handleClick = (ev) => {
    const { fetchRepositories, onSuccessFetch } = this.props;
    const { value } = this.state;

    ev.preventDefault();

    const successCallback = (repositories) => {
      onSuccessFetch(Math.max.apply(null, getUniqueYearsFromRepositories(repositories)));
    };

    fetchRepositories(value, successCallback);
  };

  render() {
    const { value } = this.state;
    const { user } = this.props;

    return (
      <Account
        value={value}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        disabled={!!value && value === user}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
