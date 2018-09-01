import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repositories from '../components/Repositories';

const mapStateToProps = store => ({
  repositories: store.repositories,
  account: store.account,
});

class RepositoriesContainer extends Component {
  renderTemplate() {
    const { repositories, account } = this.props;

    if (account.error.length > 0 && !account.isFetching) {
      return (
        <p>{account.error}</p>
      );
    }
    if (!account.isFetching) {
      return (
        <Repositories
          repositories={repositories.filteredRepositories}
          year={repositories.year}
        />
      );
    }

    return <p>Fetching...</p>;
  }

  render() {
    return this.renderTemplate();
  }
}

export default connect(mapStateToProps)(RepositoriesContainer);
