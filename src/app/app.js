import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './app.css'
import Page from '@govuk-react/page'
import BackLink from '@govuk-react/back-link'
import { H1 } from '@govuk-react/heading'

const App = () => (
  <Page beforeChildren={<BackLink href="#" />}>
    <H1>Page title</H1>
  </Page>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
