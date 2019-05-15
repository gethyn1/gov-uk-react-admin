import React, { useEffect } from 'react'
import { H1 } from '@govuk-react/heading'
import UnorderedList from '@govuk-react/unordered-list'
import ListItem from '@govuk-react/list-item'
import LoadingBox from '@govuk-react/loading-box'
import WarningText from '@govuk-react/warning-text'
import { AppLayout } from '../../layouts'

const Claims = ({ getClaims, claims, meta }) => {
  useEffect(() => {
    getClaims()
  }, [getClaims])

  // TODO don't show page until network request complete for security
  // TODO implement better loading (e.g. skeleton content)
  return (
    <AppLayout>
      <H1>Claims</H1>
      {meta.read.hasErrored && <WarningText>There was an error loading claims</WarningText>}
      <LoadingBox loading={meta.read.isLoading}>
        {meta.read.isLoading && <div style={{ height: '200px' }} />}
        <UnorderedList>
          {claims.map(claim => <ListItem key={claim.id}>{claim.title}</ListItem>)}
        </UnorderedList>
      </LoadingBox>
    </AppLayout>
  )
}

export {
  Claims
}
