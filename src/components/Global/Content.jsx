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

		this.state = {
			thevalue: '',
			thevaluebis: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		switch(e.target.id) {
			case 'input-a':
				this.setState({ thevalue: e.target.value });
				break;
			case 'input-b':
				this.setState({ thevaluebis: e.target.value });
				break;
		}
	}

  render() {
  	console.log('°RENDER°')
    return (
      <div className="Content">
      	<p className="Content-intro">
      	  <input id="input-a" value={this.state.thevalue} onChange={this.onChange} />
      	  <input id="input-b" value={this.state.thevaluebis} onChange={this.onChange} />
      	</p>
      	<h2>{this.thevalue}</h2>
      </div>
    );
  }
}

export default Content;
