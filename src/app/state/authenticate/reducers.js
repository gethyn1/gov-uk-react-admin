import { combineReducers } from 'redux'
import { createReducer, createCrudMetaReducer } from '../create-reducer'
import * as types from './types'

/**
 * State shape
 * {
 *   entity: {
 *     username: String,
 *   },
 *   isAuthenticated: boolean
 *   meta: {
 *     read: Object<Fetch Meta>
 *   }
 * }
 */

const entityHandlers = {
  [types.USER_AUTHENTICATION_SUCCEEDED]: (state, action) => {
    return action.payload.user
  }
}

const authenticationHandlers = {
  [types.USER_AUTHENTICATION_REQUESTED]: (state, action) => {
    return false
  },
  [types.USER_AUTHENTICATION_SUCCEEDED]: (state, action) => {
    return true
  },
  [types.USER_AUTHENTICATION_FAILED]: (state, action) => {
    return false
  }
}

const reducer = combineReducers({
  entity: createReducer(null, entityHandlers),
  isAuthenticated: createReducer(false, authenticationHandlers),
  meta: createCrudMetaReducer({ read: types.AUTHENTICATE_USER })
})

export {
  reducer
}
