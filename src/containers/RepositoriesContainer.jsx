import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repositories from '../components/Repositories';

const RepositoriesContainer = ({ filteredRepositories, isFetching, error }) => {
  return (
    <Repositories
      repositories={filteredRepositories}
      isFetching={isFetching}
      error={error}
    />
  );
}

RepositoriesContainer.propTypes = {
  filteredRepositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  filteredRepositories: store.repositories.filteredRepositories,
  isFetching: store.repositories.isFetching,
  error: store.repositories.error,
});

export default connect(mapStateToProps)(RepositoriesContainer);
