import React from 'react'
import { Grid } from 'semantic-ui-react'

const GLeft = ({ children }) => {
  return (
    <Grid.Column mobile={12} tablet={12} computer={3}>
      {children}
    </Grid.Column>
  )
}

export default GLeft
