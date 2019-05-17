import { connect } from 'react-redux'
import { Login } from './login'
import { authenticate } from '../../../state'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ username, password }) => dispatch(authenticate.actions.authenticateUser({ username, password }))
})

const container = connect(null, mapDispatchToProps)(Login)

export {
  container
}
