// Dependencies
import React from 'react';

const FormModelBaseProducItem = props =>
  <div className="FormModelBaseProducItem">
    <input type="hidden" name="id" value={props.id} onChange={ props.onChange } />
    <div>
      <div><label>{props.titleLabel}</label></div>
      <input type="text" name="title" value={props.title} onChange={ props.onChange } />
    </div>
    <div>
      <div><label>{props.contentLabel}</label></div>
      <textarea name="content" onChange={ props.onChange } value={props.content} />
    </div>
    { !props.hideStatusCtrl
      ? <div>
          <div><label>{props.statusLabel}</label></div>
          Default<input type="radio" name="status" value="default" checked={props.status === 'default'} onChange={ props.onChange } />
          <input type="radio" name="status" value="public" checked={props.status === 'public'} onChange={ props.onChange } />Public
        </div>
      :null }
  </div>

export default FormModelBaseProducItem;
