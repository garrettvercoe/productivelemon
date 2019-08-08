import React from 'react'
import { Button, input, Grid, Form, Divider } from 'semantic-ui-react'

import TaskManagement from './taskmanagement'
import TitleSection from '../components/titleSection'
import Reading from './reading'
import NoteManagement from './notemanagement'
import HabitTracking from './habittracking'
import TaskAutomation from './taskautomation'
import '../components/styles.css'
const IndexPage = () => (
  <>
    {/* <div class="breaker" /> */}
    <NoteManagement />
    <TaskManagement />
    <Reading />
    <HabitTracking />
    <TaskAutomation />
    <Divider section hidden />
  </>
)

export default IndexPage
