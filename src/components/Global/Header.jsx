// Dependences
import React, { /* Component */ } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

/**
 * stateless 'Header' component (class Component version)
 * @return {React.component} Header component
 */
//class Header extends Component {
//  static propTypes = {
//    title: PropTypes.string.isRequired,
//    items: PropTypes.arrayOf(PropTypes.object).isRequired
//  }
//
//  render() {
//    const { title, items } = this.props;
//
//    return (
//      <header className="Header">
//        <img src={logo} className="Header-logo" alt="logo" />
//        <h1 className="Header-title">{ title }</h1>
//        <ul className="Menu">
//          { items && items.map((item, key) => <li key={key}>{ item.title }</li>) }
//        </ul>
//      </header>
//    );
//  }
//}

/**
 * stateless 'Header' component (pure function version)
 * @return {React.component} Header component
 */
const Header = props => <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">{ props.title }</h1>
    <ul className="Menu">
      { props.items
        && props.items.map((item, key) => <li key={key}><Link to={ item.url }>{ item.title }</Link></li>)
      }
    </ul>
  </header>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Header;
