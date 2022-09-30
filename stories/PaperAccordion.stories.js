import { Accordion, Grid } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';

import * as mejson from "../public/me.json/me.json"

export default {
  title: 'Components/PaperAccordion',
  component: PaperAccordion,
}

export const Default = () => <>
  <Grid justify="center" align="center">
    <Grid.Col md={8} sm={12}><PaperAccordion papers={mejson.publications} /></Grid.Col>
  </Grid>
</>