import { createCallApiAction } from '../api-action-factory'
import * as types from './types'

const getClaims = () => createCallApiAction({
  endpoint: '/claims',
  types: types.READ
})

export {
  getClaims
}
