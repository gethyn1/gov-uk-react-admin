import { combineReducers } from 'redux'
import { reducer as claims } from './claims'

const rootReducer = combineReducers({
  claims
})

export {
  rootReducer
}
