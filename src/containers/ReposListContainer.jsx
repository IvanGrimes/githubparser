import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReposList from '../components/ReposList';

const mapStateToProps = store => ({
  reposlist: store.reposlist,
  account: store.account,
});

class ReposListContainer extends Component {
  renderTemplate() {
    const { reposlist, account } = this.props;

    if (account.error.length > 0 && !account.isFetching) {
      return (
        <p>{account.error}</p>
      );
    }
    if (!account.isFetching) {
      return (
        <ReposList
          repositories={reposlist.repositories}
          year={reposlist.year}
        />
      );
    }

    return <p>Fetching...</p>;
  }

  render() {
    return this.renderTemplate();
  }
}

export default connect(mapStateToProps)(ReposListContainer);
