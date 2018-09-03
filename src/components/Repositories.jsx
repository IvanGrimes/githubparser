import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Repositories.css';
import { IconContext } from 'react-icons';
import {
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaCode,
} from 'react-icons/fa';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Preloader from './Preloader';

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
      const items = repositories.map((repository, index) => {
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
          <CSSTransition
            key={+(new Date().getTime() / (index + 1)).toFixed()}
            classNames="fade"
            exit={false}
            timeout={500}
          >
            <a
              className="repositories__item"
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
          </CSSTransition>
        );
      });

      return (
        <TransitionGroup className="repositories">
          {items}
        </TransitionGroup>
      );
    }

    return <Preloader />;
  }

  render() {
    return (
      this.renderTemplate()
    );
  }
}
