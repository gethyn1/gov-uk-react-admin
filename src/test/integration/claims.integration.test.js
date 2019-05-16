import React from 'react'
import 'jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'
import { Router } from 'react-router-dom'
import { rootReducer } from '../../app/state'
import { App } from '../../app'
import { Claims } from '../../app/views/pages'

afterEach(cleanup)

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
function renderWithRedux (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  }
}

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  }
}

function renderApp (ui, route = '/') {
  const store = createStore(rootReducer, {})
  const history = createMemoryHistory({ initialEntries: [route] })

  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          {ui}
        </Router>
      </Provider>
    )
  }
}

test('full app rendering/navigating', () => {
  const { getByText } = renderApp(<App />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Claims')).toBeInTheDocument()
})

test('Renders claims page', () => {
  const { getByText } = renderWithRedux(<Claims />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Claims')).toBeInTheDocument()
})
