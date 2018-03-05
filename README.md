# Quiz requirement implemented.

> 'React' & 'Redux'.


## Installation

```javascript
// USE '6.11.3' NODE VERSION RECOMENDED.
npm install
```

## Usage

```javascript
// Launches the APP in localhost on development mode.
npm start

// Performs tasks to join, minify and uglify the code base and build DIST folder bundle.
npm build

// Launches the APP in localhost on production mode.
npm production
```

## Summary
Basic dependencies scaffolding to build any section
```javascript

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utils
/*
 * Several utils to enhance coding.
 * - getFormData - Transform data form by submmir event in JSON.
 * - getFormData(event) - Return JSON.
 * - getFormData(event, true) - Return data elements array.
 * - getFormData(event, 'all') - [Return JSON, Return data elements array].
 */
import { getFormData, isFirstRender, arrayToObject } from 'Utils_FE';

// Elements
/*
 * All widgets needed in current content section.
 * - import Whatever from 'Whatever'; - Set resolve alias by aliasResolve Object into src/config/index.js file
 */
import ControlBar from 'ControlBar';
import ItemList from 'ItemList';
import PaginatorBar from  'PaginatorBar';
import Modal from 'Modal';
import FormWrapper from 'FormWrapper';

// Own Components
/*
 * Own section components.
 */
import ProductItem from './components/ProductItem';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';

/*
 * JSON to decorate current section messages.
 * Set section messages into src/constants/app.js file
 */
// Constants
import { CONSTANTS } from 'CONST_app';
const { SECTIONS:{PRODUCTS:_CONST} } = CONSTANTS;
```