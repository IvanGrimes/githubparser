import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YearsList from '../components/YearsList';
import { setYear } from '../actions/ReposList';
import { getRepositoriesByYear } from '../actions/ReposList';
import { getYears, getRepositoriesByYears } from '../selectors';

const mapStateToProps = store => ({
  years: getYears(store),
  repositories: store.account.repositories,
});

const mapDispatchToProps = dispatch => ({
  setYear: year => dispatch(setYear(year)),
  getRepositoriesByYear: repositories => dispatch(getRepositoriesByYear(repositories)),
});

class YearsListContainer extends Component {

  render() {
    const { years, getRepositoriesByYear, repositories } = this.props;

    return (
      <div>
        <YearsList
          setYear={this.props.setYear}
          years={years}
          getRepositoriesByYear={getRepositoriesByYear}
          repositories={repositories}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsListContainer);
