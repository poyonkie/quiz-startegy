// Dependencies
import React from 'react';

const FormModelBaseProducItem = props =>
  <div className="FormModelBaseProducItem">
    <label>{props.idLabel}</label>
    <input type="text" name="id" value={props.id} onChange={ props.onChange } />
    <label>{props.titleLabel}</label>
    <input type="text" name="title" value={props.title} onChange={ props.onChange } />
    <label>{props.contentLabel}</label>
    <textarea name="content" onChange={ props.onChange } value={props.content} />
  </div>

export default FormModelBaseProducItem;
