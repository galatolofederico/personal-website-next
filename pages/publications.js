import { Grid, Stack } from '@mantine/core';
import { PaperAccordion } from '../components/PaperAccordion';
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Publications({publications}) {
  return <>
    <Stack>
      <Navbar />
      <Grid justify="center" align="center">
          <Grid.Col md={8} sm={12}><PaperAccordion papers={publications} /></Grid.Col>
      </Grid>
    </Stack>
  </>
}

export async function getStaticProps() {
  const mejson_path = path.join(process.cwd(), "./public/me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))

  return {
    props: {
      publications: mejson.publications
    }
  }
}