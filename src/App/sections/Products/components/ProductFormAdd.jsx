// Dependencies
import React from 'react';

// Components
import ProducFormModelBase from './ProducFormModelBase';

const ProductFormAdd = props =>
  <div className="ProductFormAdd">
    <ProducFormModelBase {...props} hideStatusCtrl={true}/>
  </div>

export default ProductFormAdd;
