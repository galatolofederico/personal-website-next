import { Accordion, Grid } from '@mantine/core';
import { Paper } from '../components/Paper';

import * as mejson from "../me.json/me.json"

export default {
  title: 'Components/Paper',
  component: Paper,
}

export const Published_NoCode_NoData = () => {
  let pub = mejson.publications[Math.floor(Math.random()*mejson.publications.length)]
  pub.doi = "dummy-doi"
  pub.code = ""
  pub.data = ""
  return <>
    <Grid justify="center" align="center">
      <Grid.Col md={8} sm={12}>
          <Paper {...pub} />
      </Grid.Col>
    </Grid>
  </>
}

export const Unpublished_NoCode_NoData = () => {
  let pub = mejson.publications[Math.floor(Math.random()*mejson.publications.length)]
  pub.doi = ""
  pub.code = ""
  pub.data = ""
  return <>
    <Grid justify="center" align="center">
      <Grid.Col md={8} sm={12}>
          <Paper {...pub} />
      </Grid.Col>
    </Grid>
  </>
}


export const Published_Code_Data = () => {
  let pub = mejson.publications[Math.floor(Math.random()*mejson.publications.length)]
  pub.doi = "dummy-doi"
  pub.code = "dummy-code"
  pub.data = "dummy-data"
  return <>
    <Grid justify="center" align="center">
      <Grid.Col md={8} sm={12}>
          <Paper {...pub} />
      </Grid.Col>
    </Grid>
  </>
}

export const Unpublished_Code_Data = () => {
  let pub = mejson.publications[Math.floor(Math.random()*mejson.publications.length)]
  pub.doi = ""
  pub.code = "dummy-code"
  pub.data = "dummy-data"
  return <>
    <Grid justify="center" align="center">
      <Grid.Col md={8} sm={12}>
          <Paper {...pub} />
      </Grid.Col>
    </Grid>
  </>
}