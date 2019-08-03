import React from 'react'
import chart from '../assets/404-chart.svg'
import { Grid } from 'semantic-ui-react'
import Gleft from '../components/GLeft'
import Gright from '../components/GRight'

const NotFoundPage = () => (
  <>
    <Grid>
      <Gleft> </Gleft>
      <Gright>
        <h3>Page not found. </h3>
        <p>
          This page is still being worked on or one of us has made a huge
          mistake.
        </p>
        <img src={chart} alt="404 chart" style={{ width: '60%' }} />
      </Gright>
    </Grid>
  </>
)

export default NotFoundPage
