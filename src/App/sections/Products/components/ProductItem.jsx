// Dependencies
import React from 'react';

const ProductItem = props =>
  <div className="ProductItem">
    <div>
      <div><span>ID: </span></div>{props.id}
    </div>
    <div>
      <div>
        <span>Title: </span>{props.title}
      </div>
      <div><span>Content: </span>{props.content}</div>
    </div>
    { props.status !== 'trash'
      ? <div style={{width:'150px'}}>
          <span> Status: <span className={props.status}>{props.status}</span></span>
          <div>
            <button value={props.id} onClick={ props.onEdit }>Edit</button>
            <button value={props.id} onClick={ props.onDelete }>Delete</button>
          </div>
        </div>
      : null }
  </div>

export default ProductItem;
