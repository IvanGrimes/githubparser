import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getYears from '../utils/getUniqueYearsFromRepositories';

export default class Account extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    getReposByName: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (ev) => {
    const { value } = ev.target;

    this.setState({ value });
  };

  handleClick = (ev) => { // TODO: Переместить в контейнер
    const { name, getReposByName, getRepositoriesByYear, setYear } = this.props;
    const { value } = this.state;

    ev.preventDefault();

    const successCallback = (repositories) => {
      setYear(Math.max.apply(null, getYears(repositories)));
      getRepositoriesByYear(repositories);
    };

    if (value !== name) {
      getReposByName(value, successCallback);
    }
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={value}
        />

        <button
          type="button"
          onClick={this.handleClick}
        >
          Find
        </button>
      </div>
    );
  }
}
