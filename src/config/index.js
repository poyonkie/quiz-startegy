export default {
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
  aliasResolve: {
    CONST_api: 'constants/api',
    API: 'lib/utils/api',
    Utils_FE: 'lib/utils/frontend'
  }
}
