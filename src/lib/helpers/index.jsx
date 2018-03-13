// Dependencies
import React from 'react';
import { Route, browserHistory } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

/* Exports
 */
export const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest}
      history={browserHistory}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

/* The context is passed as props. This way the component is
 * completely decoupled from the context API.
 */
export const provideContext = (childContextTypes, getChildContext) => (ComponentGuest) => {
  class ContextProvider extends React.Component {
    static childContextTypes = childContextTypes;
    getChildContext = () => getChildContext(this.props);
    render() {
      return <ComponentGuest {...this.props} />;
    }
  }
  return ContextProvider;
};
//
export const consumeContext = contextTypes => ComponentGuest => {
  const ContextConsumer = (props, context) =>
    <ComponentGuest {...props} {...context} />;
  ContextConsumer.contextTypes = contextTypes;
  return ContextConsumer;
};
