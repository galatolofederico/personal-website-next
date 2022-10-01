import { Grid, Stack } from '@mantine/core';
import { LecturesTable } from '../components/LecturesTable';
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Projects({lectures}) {
  return <>
    <Stack>
        <Navbar />
        <Grid justify="center" align="center">
            <Grid.Col md={8} sm={12}><LecturesTable lectures={lectures} /></Grid.Col>
        </Grid>
    </Stack>
  </>
}

export async function getStaticProps() {
  const mejson_path = path.join(process.cwd(), "./me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))

  return {
    props: {
      lectures: mejson.lectures
    }
  }
}