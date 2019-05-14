import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../state'

const preloadedState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const testMiddleware = (store) => (next) => (action) => {
  console.log('TEST MIDDLEWARE!!!')
  return next(action)
}

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(testMiddleware)
  )
)

export {
  store
}
