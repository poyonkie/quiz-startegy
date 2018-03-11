// Dependencies
import React, { Component } from 'react';

// Assets
// import './styles.css';

const FormWrapper = props =>(
  <div className='FormWrapper'>
    <form onSubmit={ props.onSubmit }>
      { props.children }
      <input type="button" value="Cancel" onClick={ props.onCancel } />
      <input type="submit" value="Submit" />
    </form>
  </div>
)

export default FormWrapper;

// Helpers about
export function onChangeHandler(event, setState) {
  const inputState = {[event.target.name]: event.target.value};
  this.setState(inputState);
}
