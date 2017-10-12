// Dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Asets
import './Global/css/App.css';

// Components
import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="App Title" items={items} />
        <Content body={ children } />
        <Footer copyrigth="&copy App footer" />
      </div>
    );
  }
}

export default App;
