// Dependences
import React, { Component } from 'react';

// Assets
import './css/Content.css';

/**
 * 
 */

class Content extends Component {
	constructor() {
		super();

		this.state = {};
	}

  render() {
  	console.log('°RENDER°')
    return (
      <div className="Content">
      	<p className="Content-intro">
      		Content!!!
      	</p>
      	<h2>{this.thevalue}</h2>
      </div>
    );
  }
}

export default Content;
