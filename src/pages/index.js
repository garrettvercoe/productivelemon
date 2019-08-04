import React from 'react'
import { Button, input, Grid, Form, Divider } from 'semantic-ui-react'

import ProjectGrid from './taskmanagement'
import TitleSection from '../components/titleSection'
import Reading from './reading'
import NoteManagement from './noteManagement'

const IndexPage = () => (
  <>
    <Divider section hidden />
    <NoteManagement />
    <Reading />

    <TitleSection>Visitor Favorites</TitleSection>
    <TitleSection>Strategies</TitleSection>

    <TitleSection>Habit Building</TitleSection>
    <TitleSection>Block Out Distractions</TitleSection>
    <Divider section hidden />
    <TitleSection>Task Management</TitleSection>
    <ProjectGrid />
    <Divider section hidden />
  </>
)

export default IndexPage
