// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Asets
import './_globals/css/App.css';

// Components
import Header from './_globals/Header';
import Footer from './_globals/Footer';
import Content from './_globals/Content';

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
