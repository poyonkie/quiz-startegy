// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Asets
import './_globals/css/App.css';

// Components
import Header from './_globals/Header';
import Footer from './_globals/Footer';
import Content from './_globals/Content';

import { header, footer } from '../fixedData';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children, title, menu } = this.props;
    return (
      <div className="App">
        <Header title={ title || header.title } items={ menu || header.menu } />
        <Content body={ children } />
        <Footer copyrigth={ footer.copyrigth } />
      </div>
    );
  }
}

export default App;
