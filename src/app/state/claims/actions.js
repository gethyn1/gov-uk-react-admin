import { CALL_API } from '../../middleware/api-service'
import * as types from './types'

const getClaims = () => ({
  // TODO type is added as integreation test throws an error if type is undefined. Needs looking into
  // TODO refactor to call api function
  type: CALL_API,
  [CALL_API]: {
    endpoint: '/claims',
    types: types.READ
  }
})

export {
  getClaims
}
