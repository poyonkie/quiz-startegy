// Dependencies
import React from 'react';

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
