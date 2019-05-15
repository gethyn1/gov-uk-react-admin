import { connect } from 'react-redux'
import { Claims } from './claims'

const mapStateToProps = (state) => ({
  // TODO use selector to get entities
  claims: state.claims.entities
})

const container = connect(mapStateToProps, null)(Claims)

export {
  container
}
