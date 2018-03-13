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
import ProductFormAdd from './components/ProductFormAdd';
import ProductFormEdit from './components/ProductFormEdit';

// Constants
import { CONSTANTS } from 'CONST_app';
const { SECTIONS:{PRODUCTS:_CONST} } = CONSTANTS;

// sectionModel
import { navMenu } from './sectionModel';

// Assets
import './Products.css';

// Actions
import * as actions from './actions';

const navMenuStyle = 'navMenuStyle';

const modalGuests = {
  'add': ProductFormAdd,
  'edit': ProductFormEdit
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
    this.productFormHandleSubmit = this.productFormHandleSubmit.bind(this);
    this.productFormHandleCancel = this.productFormHandleCancel.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  /* React methods
   */
  componentWillMount() {
    if (!this.props.products.length > 0) {
      this.props.loadProducts();
    }
  }

  componentDidUpdate() {
    const { products, updateDimensions } = this.props;
    if (this.state.products !== products) {
      this.setState({ products }, updateDimensions);
    }

  }

  /* Own methods
   */
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

  controlBarMenuHandler(event) {
    this.setState({ navMenuActiveItem: event.target.value });
    this.props.filterProducts(event.target.value);
  }

  productItemEventHandler(event) {
    switch(event.target.textContent.toLowerCase()) {
      case 'edit': {
        this.renderModal('edit', { editId: event.target.value, modalTitle: `Edit product ${event.target.value}` });
        break;
      }

      case 'delete': {
        this.props.removeProduct(event.target.value);
        break;
      }

      default:
        return null;
    }
  }

  productFormHandleSubmit(event) {
    const dataForm = getFormData(event.target);
    if (this.state.editId) {
      this.props.editProduct(arrayToObject(dataForm));
    } else {
      const { products } = this.props;
      const lastProductId = products[products.length-1].id;
      this.props.addProduct({...arrayToObject(dataForm), id:lastProductId+1, status:'default'});
    }
    this.setState({showModal:false});
    event.preventDefault();
  }

  productFormHandleCancel(event) {
    this.setState({showModal:false});
  }

  /* Render
   */
  render() {
    const { products, navMenuActiveItem, modalTitle, showModal, modalGuestTemplate:Guest, editId } = this.state;
    const { TITLE } = _CONST;
    const guestProps = products ? products.find(i => parseInt(i.id) === parseInt(editId)) : null;
    if (!isFirstRender(products)) {
      return null;
    }

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

        <PaginatorBar chainedData={products} />
        {/*
          <SortBar chainedData={products} />
        */}
        <ItemList
          itemList={ products }>
          <ProductItem onEdit={this.productItemEventHandler} onDelete={this.productItemEventHandler} />
        </ItemList>
        <PaginatorBar chainedData={products} />

        <Modal
          title={ modalTitle }
          showModal={ showModal }
          onClose={ () => this.setState({showModal:false}) }
          >
          { Guest
            ? <FormWrapper
                onSubmit={ this.productFormHandleSubmit }
                onCancel={ this.productFormHandleCancel }>
                <Guest {...guestProps} titleLabel='Title' contentLabel='Content' />
              </FormWrapper>
            : <span>º- Modal container -º</span>}
        </Modal>
      </div>
    );
  }
}

export default connect(state => ({
  products: state.products.filteredList,
  currentProduct: state.products.detail,
}), actions)(Products);
