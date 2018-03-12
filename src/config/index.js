export const server = Object.freeze({
  serverPort: 3000,
  baseUrl: 'http://localhost:3000',
  api: {
    url: '/api/'
  },
  views: {
    engine: '.hbs',
    extension: '.hbs',
    path: './views'
  },
});

export const aliasResolve = Object.freeze({
  // Constants
  CONST_api: 'constants/api',
  CONST_app: 'constants/app',
  CONST_common: 'constants/commonDefault',
  API: 'lib/utils/api',
  Utils_FE: 'lib/utils/frontend',

  // Elements
  ControlBar: 'App/commons/elements/ControlBar',
  ItemList: 'App/commons/elements/ItemList',
  PaginatorBar: 'App/commons/elements/PaginatorBar',
  Modal: 'App/commons/elements/Modal',
  FormWrapper: 'App/commons/elements/FormWrapper',
})
