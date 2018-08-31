import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

  handleClick = (ev) => {
    const { name, getReposByName, getRepositoriesByYear } = this.props;
    const { value } = this.state;

    ev.preventDefault();
    console.log('account', getRepositoriesByYear)

    if (value !== name) {
      getReposByName(value, getRepositoriesByYear);
      // TODO: dispatch(setYear(Math.max.apply(null, years(this.props.repositories))) set last year from reposlist or put inside getReposByName
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
