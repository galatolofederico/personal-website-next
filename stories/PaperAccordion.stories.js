import { Accordion, Grid } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';

import * as mejson from "./data/me.json"

export default {
  title: 'Components/PaperAccordion',
  component: PaperAccordion,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col span={8}><PaperAccordion papers={mejson.publications} /></Grid.Col>
  </Grid>
</>