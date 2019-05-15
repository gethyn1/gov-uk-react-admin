import { connect } from 'react-redux'
import { Claims } from './claims'
import { claims } from '../../../state'

const mapStateToProps = (state) => ({
  // TODO use selector to get entities
  claims: state.claims.entities
})

const mapDispatchToProps = (dispatch) => ({
  getClaims: () => dispatch(claims.actions.getClaims())
})

const container = connect(mapStateToProps, mapDispatchToProps)(Claims)

export {
  container
}
