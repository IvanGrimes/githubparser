import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getReposByName } from '../actions/Account';

const mapStateToProps = store => ({
  account: store.account,
});

const mapDispatchToProps = dispatch => ({
  getReposByName: name => dispatch(getReposByName(name)),
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
    const { account, getReposByName } = this.props;

    return (
      <Account
        name={account.name}
        getReposByName={getReposByName}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
