import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReposList from '../components/ReposList';
import { connect } from 'react-redux';
import { setYear, getRepositoriesBySelectedYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  reposlist: store.reposlist,
  repositories: store.account.repositories,
  isFetching: store.account.isFetching,
});

const mapDispatchToProps = dispatch => ({
  setYear: year => dispatch(setYear(year)),
});

class ReposListContainer extends Component {
  renderTemplate() {
    const { repositories, reposlist, isFetching } = this.props;

    if (!isFetching) {
      return (
        <ReposList
          repositories={repositories}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReposListContainer);
