import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Years from '../components/Years';
import { setYear } from '../actions/repositoriesActions';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
  currentYear: store.repositories.year,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (year) => {
    dispatch(setYear(year));
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
    let years = [];

    repositories.forEach(repository => years.push(new Date(repository.created_at).getFullYear()));

    years = years.filter((year, index, arr) => arr.indexOf(year) === index);

    years.sort((a, b) => a > b);

    return years;
  }

  handleClick = (ev) => {
    const { handleClick, currentYear } = this.props;
    const selectedYear = parseInt(ev.target.textContent, 10);

    ev.preventDefault();

    if (selectedYear === currentYear) return;

    handleClick(selectedYear);
  };

  render() {
    const { currentYear } = this.props;
    return (
      <Years
        years={this.getYears()}
        handleClick={this.handleClick}
        currentYear={currentYear}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsContainer);
