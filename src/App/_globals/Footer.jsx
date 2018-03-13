// Dependencies
import React, { /* Component */ } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

/**
 * stateless 'Footer' component (pure function version)
 * @return {React.component} Footer component
 */
const Footer = props => {
  const { copyrigth = '&copy React 2017' } = props;
  return <footer dangerouslySetInnerHTML={{__html: copyrigth }} style={ props.bottomFix && style.bottomFix} />
}

Footer.propTypes = {
  copyrigth: PropTypes.string
}

const style = {
  bottomFix: {
    position: 'fixed',
    width: '100%',
    bottom: '0px'
  }
}

export default Footer;
