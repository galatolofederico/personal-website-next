import { Accordion, Grid } from '@mantine/core';
import { LecturesTable } from '../components/LecturesTable';

import * as mejson from "./data/me.json"

export default {
  title: 'Components/LecturesTable',
  component: LecturesTable,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}><LecturesTable lectures={mejson.lectures} /></Grid.Col>
  </Grid>
</>