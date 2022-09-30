import { Accordion, Grid } from '@mantine/core';
import { LecturesTable } from '../components/LecturesTable';

import * as mejson from "../public/me.json/me.json"

export default {
  title: 'Components/LecturesTable',
  component: LecturesTable,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col md={8} sm={12}><LecturesTable lectures={mejson.lectures} /></Grid.Col>
  </Grid>
</>