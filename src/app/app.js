import React from 'react'
import { Route } from 'react-router-dom'
import { compose, map, path } from 'ramda'
import { routes } from './routes'

const createRoute = (route) => <Route key={route.path} path={route.path} component={route.component} />

const Routes = compose(map(createRoute), path(['routes']))

const App = () => (
  <Routes routes={routes} />
)

export {
  App
}
