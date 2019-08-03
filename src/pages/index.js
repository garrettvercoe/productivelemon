import React from 'react'
import { Button, input, Grid, Form, Divider } from 'semantic-ui-react'

import ProjectGrid from '../components/gridBlocks/projectGrid'
import TitleSection from '../components/titleSection'

const IndexPage = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1080,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <TitleSection>Reading</TitleSection>
    <Divider section hidden />
    <TitleSection>Task Management</TitleSection>
    <ProjectGrid />
    <Divider section hidden />
  </div>
)

export default IndexPage
