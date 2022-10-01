import { Accordion, Grid } from '@mantine/core';
import { ThesesTable } from '../components/ThesesTable';

import * as mejson from "../me.json/me.json"

export default {
  title: 'Components/ThesesTable',
  component: ThesesTable,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col md={8} sm={12}><ThesesTable theses={mejson.advised_theses} /></Grid.Col>
  </Grid>
</>