// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utils & Helpers
import { consumeContext } from 'lib/helpers';

// Asets
import './_globals/css/App.css';

// Components
import Header from './_globals/Header';
import Footer from './_globals/Footer';
import Content from './_globals/Content';

import { header, footer } from '../fixedData';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  /* React methods
   */
  componentWillMount() {
    const { router:{route:{location:{pathname}}} } = this.props;
    if (this.state.pathnameRoute !== pathname) {
      this.setState({ pathnameRoute: pathname });
    }
    this.updateDimensions();
  }

  componentDidMount() {
    this.setStateDimentions();
    window.addEventListener("optimizedResize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("optimizedResize", this.updateDimensions);
  }

  componentDidUpdate() {
    const { router:{route:{location:{pathname}}} } = this.props;
    if (this.state.pathnameRoute !== pathname) {
      this.setState({ pathnameRoute: pathname }, this.updateDimensions);
    }
  }

  /* Own methods
   */
  setStateDimentions = () => {
    const { appContainer } = this;
    if (appContainer) {
      this.setState({ scrollHeight: appContainer.scrollHeight });
    }
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight}, this.setStateDimentions);
  }

  /* Render
   */
  render() {
    const { children, title, menu } = this.props;
    const { height, scrollHeight, pathnameRoute } = this.state;
    const { appContainer } = this;
    const bottomFix = scrollHeight < height || null;
    const style = {
      height: bottomFix
        ?` ${ height - appContainer.children[0].clientHeight - appContainer.children[2].clientHeight}px`
        : null
    };

    return (
      <div className="App" ref={appRef => { this.appContainer = appRef }}>
        <Header title={ title || header.title } items={ menu || header.menu } />
        <Content body={ children } style={style} updateDimensions={ this.updateDimensions } />
        <Footer copyrigth={ footer.copyrigth } bottomFix={bottomFix} />
      </div>
    );
  }
}

export default consumeContext({
  router: PropTypes.object
})(App);
