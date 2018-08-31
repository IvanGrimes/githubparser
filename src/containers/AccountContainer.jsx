import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getReposByName } from '../actions/Account';
import { getRepositoriesByYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  account: store.account,
});

const mapDispatchToProps = dispatch => ({
  getReposByName: (name, callback) => dispatch(getReposByName(name, callback)),
  getRepositoriesByYear: repositories => dispatch(getRepositoriesByYear(repositories)),
});

class AccountContainer extends Component {
  static propTypes = {
    account: PropTypes.shape({
      name: PropTypes.string.isRequired,
      repositories: PropTypes.array.isRequired,
    }).isRequired,
    getReposByName: PropTypes.func.isRequired,
  };

  render() {
    const { account, getReposByName, getRepositoriesByYear } = this.props;

    return (
      <Account
        name={account.name}
        getReposByName={getReposByName}
        getRepositoriesByYear={getRepositoriesByYear}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
