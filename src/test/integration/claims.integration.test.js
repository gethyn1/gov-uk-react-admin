import React from 'react'
import 'jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { render, cleanup } from 'react-testing-library'
import { Router } from 'react-router-dom'
import { App } from '../../app'

afterEach(cleanup)

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

test('full app rendering/navigating', () => {
  const { getByText } = renderWithRouter(<App />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Claims page')).toBeInTheDocument()
})
