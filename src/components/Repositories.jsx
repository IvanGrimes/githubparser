import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Repositories.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Preloader from './Preloader';
import Repository from './Repository';

export default class Repositories extends Component {
  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  renderTemplate() {
    const { repositories, error, isFetching } = this.props;

    if (error.length && !isFetching) {
      return <p>{error}</p>;
    }

      const items = repositories.map((repository, index) => {
        const {
          name,
          svn_url,
          description,
          stargazers_count,
          forks,
          open_issues,
          language,
        } = repository;

        return (
            <CSSTransition
              key={+(new Date().getTime() / (index + 1)).toFixed()}
              classNames="repositories__item-"
              in={!isFetching && !error.length}
              timeout={250}
              appear
            >
              <Repository
                name={name}
                url={svn_url}
                description={description}
                stars={stargazers_count}
                forks={forks}
                issues={open_issues}
                language={language}
              />
            </CSSTransition>

        );
      });

    return items;
  }

  render() {
    const { isFetching } = this.props;
    return (
      <Fragment>
        <Preloader isFetching={isFetching} />
        <TransitionGroup className="repositories">
          {this.renderTemplate()}
        </TransitionGroup>
      </Fragment>
    );
  }
}
