import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const authenticateUser = ({ username, password }) => createCallApiAction({
  method: 'POST',
  endpoint: '/login',
  types: types.AUTHENTICATE_USER,
  body: { username, password }
})

export {
  authenticateUser
}
