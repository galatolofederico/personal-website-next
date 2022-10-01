import { Grid, Stack } from '@mantine/core';
import { ThesesTable } from '../components/ThesesTable';
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Theses({theses}) {
  return <>
    <Stack>
        <Navbar />
        <Grid justify="center" align="center">
            <Grid.Col md={8} sm={12}><ThesesTable theses={theses} /></Grid.Col>
        </Grid>
    </Stack>
  </>
}

export async function getStaticProps() {
  const mejson_path = path.join(process.cwd(), "./public/me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))

  return {
    props: {
      theses: mejson.advised_theses
    }
  }
}