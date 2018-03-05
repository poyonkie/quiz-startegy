// Dependencies
import React from 'react';

const FormModelBaseProducItem = props =>
  <div className="FormModelBaseProducItem">
    <label>{props.titleLabel}</label>
    <input type="text" name="title" value={props.title} onChange={ props.onChange } />
    <label>{props.valueLabel}</label>
    <input type="text" name="value" value={props.value} onChange={ props.onChange } />
  </div>

export default FormModelBaseProducItem;
