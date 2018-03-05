// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utils
import { getFormData } from 'Utils_FE';

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

const itemList = [
            {title: 'uno', id: '1', value: 'some value'},
            {title: 'dos', id: '2', value: 'some value'},
            {title: 'tres', id: '3', value: 'some value'},
            {title: 'cuatro', id: '4', value: 'some value'},
            {title: 'cinco', id: '5', value: 'some value'},
            {title: 'seis', id: '6', value: 'some value'},
            {title: 'seis', id: '6', value: 'some value'},
            {title: 'seis', id: '6', value: 'some value'},
          ]

const navMenu = [
            {title: 'uno', value: '1'},
            {title: 'dos', value: '2'},
            {title: 'tres', value: '3'},
            null,
            {title: 'cuatro', value: '4'},
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
      navMenuActiveItem: 0,
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

  controlBarMenuHandler(event) {
    this.setState({ navMenuActiveItem: event.target.value });
  }

  productItemEventHandler(event) {
    console.log('productItemEventHandler >', event.target.value);
    this.renderModal('edit', { editId: event.target.value });
  }

  addProductHandleSubmit(event) {
    const dataForm = getFormData(event.target);
    event.preventDefault();

    console.log('A product was submitted: ', dataForm);
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
    const { navMenuActiveItem, modalTitle, showModal, modalGuestTemplate:Guest, editId } = this.state
    const { TITLE } = _CONST;
    const guestProps = itemList.find(i => i.id === editId) || null;

    return (
      <div>
        <ControlBar
          title={ TITLE }
          navMenu={ navMenu }
          menuHandler={ this.controlBarMenuHandler }
          navMenuActiveItem={ navMenuActiveItem }
          navMenuStyle={ navMenuStyle }>

          custom controls or whatever
          <button onClick={ () => this.setState({showModal:true, modalGuestTemplate:null})}>Open Modal</button>
          <button onClick={ () => this.renderModal('add', {editId:null}) }>Add Product</button>

        </ControlBar>

        <PaginatorBar chainedData={itemList} />
        {/*
          <FilterBar chainedData={itemList} />
        */}
        <ItemList
          itemList={ itemList }>
          <ProductItem customEvent={this.productItemEventHandler} />
        </ItemList>
        <PaginatorBar chainedData={itemList} />

        <Modal
          title={ modalTitle }
          showModal={ showModal }
          onClose={ () => this.setState({showModal:false}) }
          //onAcept={ evt => console.log('ACEPT', evt.target) }
          //onCancel={ this.addProductHandleCancel }
          >
          { Guest
            ? <FormWrapper
                onSubmit={ this.addProductHandleSubmit }
                onCancel={ this.addProductHandleCancel }>
                <Guest {...guestProps} />
              </FormWrapper>
            : <span>º- Modal container -º</span>}
        </Modal>
      </div>
    );
  }
}

export default Products;
