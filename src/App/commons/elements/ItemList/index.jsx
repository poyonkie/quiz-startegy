// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Constants
import { CONSTANTS } from 'CONST_common';
const { COMMONS:{ITEMLIST:_CONST} } = CONSTANTS;

// Assets
import './styles.css';

const ItemList = props => {
  const { itemList, itemListActiveItem, children } = props;

  const fillOutItemChild = itemData => React.Children.map(children, child => {
    const prevProps = child.props;
    return {...child, props:{...itemData, ...prevProps}};
  });

  const renderDefaultItemList = () =>
    itemList && itemList.length > 0
    ? <table className="default-template"><tbody>
        {itemList.map((i,k) => (
          <tr key={k}>
            { Object.values(i).map((innerI, innerK) => <td key={innerK}>{innerI}</td> ) }
          </tr>
        ))}
      </tbody></table>
    : <span><h2>{ _CONST.EMTY_LIST }</h2></span>

  const renderItemList = children =>
    itemList && itemList.length > 0
    ? <ul>
        {itemList.map((i,k) => (
          <li key={k}>
            { fillOutItemChild(i) }
          </li>
        ))}
      </ul>
    : <span><h2>{ _CONST.EMTY_LIST }</h2></span>

  /* #############
  // < Render > //
  ############# */
  return (<div className='ItemList'>
      { !children
        ? renderDefaultItemList()
        : renderItemList(children) }
  </div>);
}

ItemList.propTypes = {
  itemListActiveItem: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.object,
  //mainMenuHandler: PropTypes.func.isRequired,
}

export default ItemList;
