import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repositories from '../components/Repositories';

const mapStateToProps = store => ({
  repositories: store.repositories,
});

class RepositoriesContainer extends Component {
  static propTypes = {
    repositories: PropTypes.shape({
      year: PropTypes.number.isRequired,
      filterByYear: PropTypes.bool.isRequired,
      error: PropTypes.string.isRequired,
      isFetching: PropTypes.bool.isRequired,
      repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  };

  render() {
    console.log('render')

    const { repositories } = this.props;

    return (
      <Repositories
        error={repositories.error}
        isFetching={repositories.isFetching}
        repositories={repositories.filteredRepositories}
      />
    );
  }
}

export default connect(mapStateToProps)(RepositoriesContainer);
