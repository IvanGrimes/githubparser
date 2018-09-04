import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import {
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaCode,
} from 'react-icons/fa';

const Repository = ({
  url,
  name,
  description,
  stars,
  forks,
  issues,
  language,
}) => (
  <a
    className="repositories__item"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
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

          {stars}
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

          {issues}
        </div>
      </div>

      <div className="repositories__stats">
        <div className="repositories__stats-item">
          <IconContext.Provider value={{ className: 'repositories__stats-item-icon' }}>
            <FaCode />
          </IconContext.Provider>

          {language || 'Other'}
        </div>
      </div>
    </div>
  </a>
);

Repository.defaultProps = {
  description: false,
  language: 'Other',
};

Repository.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  issues: PropTypes.number.isRequired,
  language: PropTypes.string,
};

export default Repository;
