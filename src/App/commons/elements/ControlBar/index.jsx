// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { CONSTANTS } from 'CONST_common';
const { COMMONS:{CONTROLBAR:_CONST} } = CONSTANTS;

// Assets
import './styles.css';

const ControlBar = props => {
  const { navMenu, navMenuActiveItem, navMenuStyle, title=_CONST.TITLE_DEFAULT } = props;

  const renderNavMenu = () =>
    navMenu && navMenu.length > 0
    ? <ul>
        {navMenu.map((i,k) => (
          i
          ? <li key={k}>
            <button
              value={i.value}
              onClick={ props.menuHandler }
              disabled={navMenuActiveItem === i.value} >
              {i.title}
            </button>
          </li>
          : <span key={k} className="separator"> | </span>
        ))}
      </ul>
    : null

  /* #############
  // < Render > //
  ############# */
  return (<div className='ControlBar'>
    <div className="top">
      <h3 className="head-title">{ title }</h3>
      <div>
        { //heritage controls
          props.children
        }
      </div>
    </div>
    <nav className={navMenuStyle}>
      { renderNavMenu() }
    </nav>
  </div>);
}

ControlBar.propTypes = {
  title: PropTypes.string,
  navMenuStyle: PropTypes.string,
  navMenu: PropTypes.arrayOf(PropTypes.object),
  menuHandler: PropTypes.func.isRequired,
}

export default ControlBar;
