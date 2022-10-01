import { Grid, Stack } from '@mantine/core';
import { ProjectsTable } from '../components/ProjectsTable';
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Projects({projects}) {
  return <>
    <Stack>
        <Navbar />
        <Grid justify="center" align="center">
            <Grid.Col md={8} sm={12}><ProjectsTable projects={projects} /></Grid.Col>
        </Grid>
    </Stack>
  </>
}

export async function getStaticProps() {
  const mejson_path = path.join(process.cwd(), "./me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))

  return {
    props: {
      projects: mejson.projects
    }
  }
}