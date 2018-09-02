import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Repositories.css';
import { FaStar, FaEye, FaCodeBranch, FaExclamationCircle, FaCode, FaBalanceScale } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default class Repositories extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  renderTemplate() {
    const { repositories, error, isFetching } = this.props;

    if (error.length && !isFetching) {
      return <p>{error}</p>;
    }

    if (!isFetching) {
      return repositories.map((repository, index) => {
        const {
          name,
          url,
          stargazers_count,
          forks,
          open_issues,
          language,
          description,
        } = repository;

        return (
          <a
            className="repositories__item"
            key={+(new Date().getTime() / (index + 1)).toFixed()}
            href={url}
            target="_blank"
          >
            <h1
              className="repositories__item-title"
            >
              {name}
            </h1>

            {
              description
              && <p className="repositories__item-description">{description}</p>
            }

            <div className="repositories__item-stats">
              <div className="repositories__stats">
                <div className="repositories__stats-item">
                  <IconContext.Provider value={{ className: 'repositories__stats-item-icon' }}>
                    <FaStar />
                  </IconContext.Provider>

                  {stargazers_count}
                </div>

                <div className="repositories__stats-item">
                  <IconContext.Provider value={{ className: 'repositories__stats-item-icon' }}>
                    <FaCodeBranch />
                  </IconContext.Provider>

                  {forks}
                </div>

                <div className="repositories__stats-item">
                  <IconContext.Provider value={{ className: 'repositories__stats-item-icon' }}>
                    <FaExclamationCircle />
                  </IconContext.Provider>

                  {open_issues}
                </div>
              </div>

              <div className="repositories__stats">
                <div className="repositories__stats-item">
                  <IconContext.Provider value={{ className: 'repositories__stats-item-icon' }}>
                    <FaCode />
                  </IconContext.Provider>

                  {language ? language : 'Other'}
                </div>
              </div>
            </div>
          </a>
        );
      });
    }

    return <p>Fetching...</p>;
  }

  render() {
    return (
      <div className={'repositories'}>
        {this.renderTemplate()}
      </div>
    );
  }
}
