import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YearsList from '../components/YearsList';
import { setYear, getRepositoriesByYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
  currentYear: store.reposlist.year,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (year, repositories) => {
    dispatch(setYear(year));
    dispatch(getRepositoriesByYear(repositories));
  },
});

class YearsListContainer extends Component {
  getYears() {
    const { repositories } = this.props;
    const years = new Set();

    repositories.forEach(item => years.add(new Date(item.created_at).getFullYear()));

    return Array.from(years).sort((a, b) => a > b);
  }

  handleClick = (ev) => {
    const { handleClick, repositories, currentYear } = this.props;
    const selectedYear = parseInt(ev.target.textContent, 10);

    ev.preventDefault();

    if (selectedYear !== currentYear) {
      handleClick(selectedYear, repositories);
    }
  };

  render() {
    return (
      <div>
        <YearsList
          years={this.getYears()}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsListContainer);
