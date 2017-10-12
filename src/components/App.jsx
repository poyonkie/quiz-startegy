// Dependences
import React, { Component } from 'react';

// Asets
import './Global/css/App.css';

// Components
import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="App Title" items={items} />
        <Content />
        <Footer copyrigth="&copy App footer" />
      </div>
    );
  }
}

export default App;
