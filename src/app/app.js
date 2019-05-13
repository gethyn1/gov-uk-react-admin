import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { compose, map, path } from 'ramda'
import { routes } from './routes'

const createRoute = (route) => <Route key={route.path} path={route.path} component={route.component} />

const Routes = compose(map(createRoute), path(['routes']))

const App = () => (
  <Router>
    <Routes routes={routes} />
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
