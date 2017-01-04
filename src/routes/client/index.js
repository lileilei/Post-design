import {injectReducer} from "../../store/reducers";
export default (store) => ({
  path: 'client',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const client = require('./containers/client.js').default
      const reducer = require('./reducers/client_reducers').default
      injectReducer(store, {key: 'client', reducer})
      cb(null, client)
    })
  }
})
