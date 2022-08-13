import { Accordion, Grid } from '@mantine/core';
import { ProjectsTable } from '../components/ProjectsTable';

import * as mejson from "./data/me.json"

export default {
  title: 'Components/ProjectsTable',
  component: ProjectsTable,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}><ProjectsTable projects={mejson.projects} /></Grid.Col>
  </Grid>
</>