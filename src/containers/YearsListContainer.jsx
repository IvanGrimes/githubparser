import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YearsList from '../components/YearsList';

const mapStateToProps = store => ({
  repositories: store.account.repositories,
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
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(YearsListContainer);
