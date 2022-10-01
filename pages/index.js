import { Grid, Stack, Center, Image, Text, Title } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';


function Picture({anagraphic}){
  return <>
    <Grid justify="center" align="center">
      <Grid.Col span={6} xs={4} sm={4} md={3} lg={2} xl={2}>
        <Image
          radius={1000}
          src={anagraphic.picture}
          alt="Random unsplash image"
        />
      </Grid.Col>
    </Grid>
  </>
}

function Name({anagraphic}){
  return <>
    <Stack spacing={0}>
      <Center>
        <Text style={{fontSize: 35, lineHeight: "1em"}}>
          {anagraphic.fullname.first} {anagraphic.fullname.middle[0]}. {anagraphic.fullname.last}
        </Text>
      </Center>
      <Center>
        <Text style={{fontSize: 20}}>
          {anagraphic.qualifications[0]}
        </Text>
      </Center>
    </Stack>
  </>
}


function Home({anagraphic, digitalidentity, publications, projects, lectures}){
  return <>
  <Stack>
    <Picture anagraphic={anagraphic}/>
    <Name anagraphic={anagraphic} />
  </Stack>
</>
}

export default function HomePage(props) {
  return <>
    <Stack>
      <Navbar />
      <Home {...props}/>
    </Stack>
  </>
}

export async function getStaticProps() {
  const mejson_path = path.join(process.cwd(), "./me.json/me.json")
  const mejson = JSON.parse(await fsPromises.readFile(mejson_path))

  return {
    props: {
      anagraphic: mejson.anagraphic,
      digitalidentity: mejson.digitalidentity,
      publications: mejson.publications,
      projects: mejson.projects,
      lectures: mejson.lectures
    }
  }
}