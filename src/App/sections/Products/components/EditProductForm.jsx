// Dependencies
import React, { Component } from 'react';

// Components
import FormModelBaseProducItem from './FormModelBaseProducItem';

class EditProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
    this.guestOnChangeHandler = this.guestOnChangeHandler.bind(this);
  }

  guestOnChangeHandler(event) {
    const inputState = {[event.target.name]: event.target.value};
    this.setState(inputState);
  }

  render() {
    return <div className="EditProductForm">
        <FormModelBaseProducItem {...this.state} onChange={ this.guestOnChangeHandler } />
      </div>
  }
}

export default EditProductForm;
