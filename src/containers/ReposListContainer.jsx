import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReposList from '../components/ReposList';
import { connect } from 'react-redux';
import { getRepositoriesBySelectedYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  reposlist: store.reposlist,
  repositories: store.account.repositories,
  isFetching: store.account.isFetching,
  error: store.account.error,
});

class ReposListContainer extends Component {
  renderTemplate() {
    const { repositories, reposlist, isFetching, error } = this.props;
    console.log('render')
    if (error.length > 0 && !isFetching) {
      console.log(error);
      return (
        <p>{error}</p>
      );
    }
    if (!isFetching) {
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
