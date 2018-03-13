// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Content.css';

const decoreteBody = (body, attrs) => {
  const propsChildren = body.props.children
    .map( child => ({...child, props:{...child.props, ...attrs}}));
  return {...body, props:{...body.props, children: propsChildren}};
}

/**
 *
 */
class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const { body, style, updateDimensions } = this.props;
    return <div className="Content" style={style}>{ decoreteBody(body, {updateDimensions}) }</div>
  }
}

export default Content;
