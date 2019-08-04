import React from 'react'
import chart from '../assets/404-chart.svg'
import { Grid } from 'semantic-ui-react'

const NotFoundPage = () => (
  <>
    <Grid>
      <h3>Page not found. </h3>
      <p>
        This page is still being worked on or one of us has made a huge mistake.
      </p>
      <img src={chart} alt="404 chart" style={{ width: '60%' }} />
    </Grid>
  </>
)

export default NotFoundPage
