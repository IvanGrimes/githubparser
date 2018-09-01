import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getRepositories } from '../actions/accountActions';
import { filterByYear, setYear } from '../actions/repositoriesActions';
import getYears from '../utils/getUniqueYearsFromRepositories';

const mapStateToProps = store => ({
  account: store.account,
});

const mapDispatchToProps = dispatch => ({
  fetchRepositories: (name, callback) => dispatch(getRepositories(name, callback)),
  onSuccessFetch: (year, apply) => {
    dispatch(setYear(year, apply));
  },
});

class AccountContainer extends Component {
  static propTypes = {
    account: PropTypes.shape({
      error: PropTypes.string.isRequired,
      isFetching: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      repositories: PropTypes.array.isRequired,
    }).isRequired,
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
    const { account, fetchRepositories, onSuccessFetch } = this.props;
    const { value } = this.state;

    ev.preventDefault();

    const successCallback = (repositories) => {
      onSuccessFetch(Math.max.apply(null, getYears(repositories)), true);
    };

    if (value !== account.name) {
      fetchRepositories(value, successCallback);
    }
  };

  render() {
    const { value } = this.state;
    const { account } = this.props;

    return (
      <Account
        value={value}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        disabled={!!value && value === account.name}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
