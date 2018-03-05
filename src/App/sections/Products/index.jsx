// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utils
import { getFormData, isFirstRender, arrayToObject } from 'Utils_FE';

// Elements
import ControlBar from 'ControlBar';
import ItemList from 'ItemList';
import PaginatorBar from  'PaginatorBar';
import Modal from 'Modal';
import FormWrapper from 'FormWrapper';

// Components
import ProductItem from './components/ProductItem';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';

// Constants
import { CONSTANTS } from 'CONST_app';
const { SECTIONS:{PRODUCTS:_CONST} } = CONSTANTS;

// Assets
import './styles.css';

// Actions
import * as actions from './actions';

const navMenu = [
            {title: 'All', value: 'all'},
            {title: 'Public', value: 'public'},
            {title: 'Default', value: 'default'},
            null,
            {title: 'Trash', value: 'trash'},
          ]

const navMenuStyle = 'navMenuStyle';

const modalGuests = {
  'add': AddProductForm,
  'edit': EditProductForm
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuActiveItem: 'all',
      showModal: false,
      modalTitle: 'Init modal state',
      modalGuestTemplate: null,
      editId: null,
    }

    this.controlBarMenuHandler = this.controlBarMenuHandler.bind(this);
    this.productItemEventHandler = this.productItemEventHandler.bind(this);
    this.addProductHandleSubmit = this.addProductHandleSubmit.bind(this);
    this.addProductHandleCancel = this.addProductHandleCancel.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  /*
   * React methods
   */
  componentWillMount() {
    this.props.loadProducts();
  }

  /*
   * Own methods
   */
  controlBarMenuHandler(event) {
    this.setState({ navMenuActiveItem: event.target.value });
  }

  productItemEventHandler(event) {
    this.renderModal('edit', { editId: event.target.value, modalTitle: `Edit product ${event.target.value}` });
  }

  addProductHandleSubmit(event) {
    const dataForm = getFormData(event.target);
    if (this.state.editId) {
      this.props.editProduct(arrayToObject(dataForm));
    } else {
      this.props.addProduct(arrayToObject(dataForm));
    }
    this.setState({showModal:false});
    event.preventDefault();
  }

  addProductHandleCancel(event) {
    this.setState({showModal:false});
  }

  renderModal(guest, moreState) {
    if (Object.keys(modalGuests).find(g => g === guest)) {
      this.setState({
        showModal:true,
        modalGuestTemplate: modalGuests[guest],
        ...moreState
      });
    } else {
      console.log(guest, ' event disallow');
    }
  }

  render() {
    const { navMenuActiveItem, modalTitle, showModal, modalGuestTemplate:Guest, editId } = this.state;
    const { products } = this.props;
    const { TITLE } = _CONST;
    const guestProps = products.find(i => parseInt(i.id) === parseInt(editId)) || null;
    if (!isFirstRender(products)) {
      return null;
    }

    const _products = navMenuActiveItem === 'all'
      ? products
      : products.filter( product => product.status === navMenuActiveItem );

    return (
      <div>
        <ControlBar
          title={ TITLE }
          navMenu={ navMenu }
          menuHandler={ this.controlBarMenuHandler }
          navMenuActiveItem={ navMenuActiveItem }
          navMenuStyle={ navMenuStyle }>
          <button onClick={ () => this.renderModal('add', {editId:null, modalTitle: `Add product`}) }>Add Product</button>
        </ControlBar>

        <PaginatorBar chainedData={_products} />
        {/*
          <SortBar chainedData={_products} />
        */}
        <ItemList
          itemList={ _products }>
          <ProductItem customEvent={this.productItemEventHandler} />
        </ItemList>
        <PaginatorBar chainedData={_products} />

        <Modal
          title={ modalTitle }
          showModal={ showModal }
          onClose={ () => this.setState({showModal:false}) }
          >
          { Guest
            ? <FormWrapper
                onSubmit={ this.addProductHandleSubmit }
                onCancel={ this.addProductHandleCancel }>
                <Guest {...guestProps} titleLabel='Title' contentLabel='Content' />
              </FormWrapper>
            : <span>º- Modal container -º</span>}
        </Modal>
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products.list,
  currentProduct: state.products.detail,
}), actions)(Products);
