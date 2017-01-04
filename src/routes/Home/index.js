import Home from './containers/HomeContainer'
import Redirect from '../PageNotFound/redirect'
import client from '../client'
export default (store) => ({
  path: 'post-design',
  component: Home,
  indexRoute: {
    onEnter (nextState, replace) {
      replace('/post-design/client')
    }
  },
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer.js').default
      cb(null, Home)
    })
  },
  childRoutes: [
    client(store),
    Redirect
  ]
})

