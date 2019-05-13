import React from 'react'
import 'normalize.css'
import './app.css'
import Page from '@govuk-react/page'
import BackLink from '@govuk-react/back-link'

const AppLayout = ({ children }) => (
  <Page beforeChildren={<BackLink href="#" />}>
    {children}
  </Page>
)

export {
  AppLayout
}
