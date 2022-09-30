import { Accordion, Grid, Stack } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';
import { Navbar } from '../components/Navbar';
import * as mejson from "../public/me.json/me.json"

export default function Publications() {
  return <>
    <Stack>
      <Navbar />
      <Grid justify="center" align="center">
          <Grid.Col md={8} sm={12}><PaperAccordion papers={mejson.publications} /></Grid.Col>
      </Grid>
    </Stack>
  </>
}