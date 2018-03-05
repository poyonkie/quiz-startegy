// Dependencies
import React from 'react';

const ProductItem = (props) =>
  <div className="ProductItem">
    {`${props.id} - ${props.title} - ${props.content} - ${props.status}`}
    <button value={props.id} onClick={ props.customEvent }>item ctrl</button>
  </div>

export default ProductItem;
