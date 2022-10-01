import { Accordion, Grid } from '@mantine/core';
import { ProjectsTable } from '../components/ProjectsTable';

import * as mejson from "../me.json/me.json"

export default {
  title: 'Components/ProjectsTable',
  component: ProjectsTable,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col md={8} sm={12}><ProjectsTable projects={mejson.projects} /></Grid.Col>
  </Grid>
</>