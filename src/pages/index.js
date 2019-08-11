import React from 'react'
import { Divider } from 'semantic-ui-react'
import TaskManagement from './taskmanagement'
import Reading from './reading'
import NoteManagement from './notemanagement'
import HabitTracking from '../layouts/habittracking'
import TaskAutomation from './taskautomation'
import '../components/styles.css'
const IndexPage = () => (
  <>
    <NoteManagement />
    <TaskManagement />
    <Reading />
    <HabitTracking />
    <TaskAutomation />
    <Divider section hidden />
  </>
)
//
export default IndexPage
