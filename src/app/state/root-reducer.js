import { combineReducers } from 'redux'
import { reducer as authenticate } from './authenticate'
import { reducer as claims } from './claims'

const rootReducer = combineReducers({
  authenticate,
  claims
})

export {
  rootReducer
}
