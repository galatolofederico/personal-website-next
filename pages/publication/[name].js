import { Grid, Stack } from '@mantine/core';
import { Navbar } from '../../components/Navbar';
import { Paper } from '../../components/Paper';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Publication({publication}) {
  return <>
  <Stack>
  <Navbar />
  <Grid justify="center" align="center">
      <Grid.Col md={8} sm={12}>
          <Paper {...publication} />
      </Grid.Col>
    </Grid>
  </Stack>
  </>
}

export async function getStaticPaths() {
  const mejson_path = path.join(process.cwd(), "./me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))
  const paths = mejson.publications.map(p => {return {params: {name: p.name}}})
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const mejson_path = path.join(process.cwd(), "./me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))
  const publication = mejson.publications.filter(p => p.name == context.params.name)[0]

  return {
    props: {
      publication: publication
    }
  }
}