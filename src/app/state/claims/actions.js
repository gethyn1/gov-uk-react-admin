import { CALL_API } from '../../middleware/api-service'
import * as types from './types'

const getClaims = () => ({
  [CALL_API]: {
    endpoint: '/claims',
    types: types.READ
  }
})

export {
  getClaims
}
