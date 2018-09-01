import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YearsList from '../components/YearsList';
import { setYear, getRepositoriesByYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
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
    const { textContent } = ev.target;
    const { handleClick, repositories } = this.props;

    ev.preventDefault();

    handleClick(+textContent, repositories);
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
