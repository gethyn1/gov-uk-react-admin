import React, { useEffect } from 'react'
import { H1 } from '@govuk-react/heading'
import UnorderedList from '@govuk-react/unordered-list'
import ListItem from '@govuk-react/list-item'
import { AppLayout } from '../../layouts'

const Claims = ({ getClaims, claims }) => {
  useEffect(getClaims, [])

  // TODO don't show page until network request complete for security
  return (
    <AppLayout>
      <H1 size="XLARGE">Claims page</H1>
      <UnorderedList>
        {claims.map(claim => <ListItem key={claim.id}>{claim.title}</ListItem>)}
      </UnorderedList>
    </AppLayout>
  )
}

export {
  Claims
}
