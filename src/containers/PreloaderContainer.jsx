import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader';


const PreloaderContainer = ({ isFetching }) => (
  <Preloader isFetching={isFetching} />
);

PreloaderContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isFetching: store.repositories.isFetching,
});

export default connect(mapStateToProps)(PreloaderContainer);
