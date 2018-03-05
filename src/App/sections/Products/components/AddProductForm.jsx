// Dependencies
import React from 'react';

// Components
import FormModelBaseProducItem from './FormModelBaseProducItem';

const AddProductForm = props =>
  <div className="AddProductForm">
    <FormModelBaseProducItem {...props} hideStatusCtrl={true}/>
  </div>

export default AddProductForm;
