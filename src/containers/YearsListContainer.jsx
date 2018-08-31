import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YearsList from '../components/YearsList';
import { setYear } from '../actions/ReposList';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
});

const mapDispatchToProps = dispatch => ({
  setYear: year => dispatch(setYear(year)),
});

class YearsListContainer extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  render() {
    const { repositories } = this.props;

    return (
      <div>
        <YearsList
          repositories={repositories}
          setYear={this.props.setYear}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearsListContainer);
