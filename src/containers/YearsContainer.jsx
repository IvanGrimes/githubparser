import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Years from '../components/Years';
import { setYear, filterRepositoriesByYear } from '../actions/repositoriesActions';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
  currentYear: store.repositories.year,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (year, repositories) => {
    dispatch(setYear(year));
    dispatch(filterRepositoriesByYear(repositories));
  },
});

class YearsContainer extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentYear: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

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
        <Years
          years={this.getYears()}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsContainer);
