import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ icon, title }) {
  return (
    <nav className='navbar bg-primary '>
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
