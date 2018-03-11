// Dependencies
import React, { Component } from 'react';

// Elements
import { onChangeHandler } from 'FormWrapper';

// Components
import ProducFormModelBase from './ProducFormModelBase';


class ProductFormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
    this.onChangeHandler = onChangeHandler.bind(this);
  }

  render() {
    return <div className="ProductFormEdit">
        <ProducFormModelBase {...this.state} onChange={ this.onChangeHandler } />
      </div>
  }
}

export default ProductFormEdit;
