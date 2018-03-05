// Dependencies
import React from 'react';

// Constants
import { CONSTANTS } from 'CONST_common';
const { COMMONS:{MODAL:_CONST} } = CONSTANTS;

// Assets
import './styles.css';

const Modal = props => props.showModal ?
  <div className='Modal'>
    <div className="wrapper">
      <div>
        <h3>{props.title || _CONST.TITLE_DEFAULT}</h3>
        <button
          className="close"
          value="0"
          onClick={ props.onClose }>x</button>
      </div>
      {props.children}
      { props.onCancel || props.onAcept
        ? <div className="buttons">
            { props.onCancel
              ? <button
                      className="cancel"
                      value="2"
                      onClick={ props.onCancel }>{_CONST.CANCEL_BTN}</button>
              : null }
            { props.onAcept
          ? <button
                  className="acept"
                  value="1"
                  onClick={ props.onAcept }>{_CONST.ACEPT_BTN}</button>
          : null }
          </div>
        : null }
    </div>
  </div>
  : null

export default Modal;
