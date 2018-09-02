import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repositories from '../components/Repositories';

const mapStateToProps = store => ({
  repositories: store.repositories,
  account: store.account,
});

class RepositoriesContainer extends Component {
  static propTypes = {
    repositories: PropTypes.shape({
      year: PropTypes.number.isRequired,
      filterByYear: PropTypes.bool.isRequired,
    }).isRequired,
    account: PropTypes.shape({
      error: PropTypes.string.isRequired,
      isFetching: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  };

  filterRepositories() {
    const { repositories, account } = this.props;
    let filteredRepositories = account.repositories;

    if (repositories.filterByYear) {
      filteredRepositories = filteredRepositories.filter((repository) => {
        return new Date(repository.created_at).getFullYear() === repositories.year;
      });
    }

    return filteredRepositories;
  }

  render() {
    const { account } = this.props;

    return (
      <Repositories
        error={account.error}
        isFetching={account.isFetching}
        repositories={this.filterRepositories()}
      />
    );
  }
}

export default connect(mapStateToProps)(RepositoriesContainer);
