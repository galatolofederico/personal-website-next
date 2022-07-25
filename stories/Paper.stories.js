import { Accordion, Grid } from '@mantine/core';
import { Paper } from '../components/Paper';

import * as mejson from "./data/me.json"

export default {
  title: 'Components/Paper',
  component: Paper,
}

export const Conference_Unpublished = () => <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}>
        <Paper {...mejson.publications[mejson.publications.length-1]} />
    </Grid.Col>
  </Grid>
</>

export const Journal_Unpublished = () => <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}>
        <Paper {...mejson.publications[mejson.publications.length-6]} />
    </Grid.Col>
  </Grid>
</>
export const Journal_Published = () => <>
<Grid justify="center" align="center">
  <Grid.Col span={8}>
      <Paper {...mejson.publications[mejson.publications.length-10]} />
  </Grid.Col>
</Grid>
</>
