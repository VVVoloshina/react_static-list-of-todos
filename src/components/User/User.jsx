import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p className="user">
    <b>USER:</b>
    <span className="user__name">{` ${name} `}</span>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
