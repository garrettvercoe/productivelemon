import React from 'react'
import { Grid } from 'semantic-ui-react'

const Gthird = ({ children }) => {
  return (
    <Grid.Column mobile={4} tablet={4} computer={4}>
      {children}
    </Grid.Column>
  )
}

export default Gthird
