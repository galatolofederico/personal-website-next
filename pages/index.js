import { Grid, Stack, Group, Center, Image, Text, ActionIcon, Tooltip, Card, Button,  Space, ScrollArea } from '@mantine/core';
import { FaInstagram, FaLinkedin, FaPhone, FaQuestionCircle, FaTelegram } from "react-icons/fa"
import { ImGithub } from "react-icons/im"
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { useMantineTheme } from '@mantine/core';

function Picture({anagraphic}){
  return <>
    <Grid justify="center" align="center">
      <Grid.Col span={5} xs={4} sm={3} md={2} lg={2} xl={1.5}>
        <Image
          radius={1000}
          fit="container"
          src={anagraphic.picture}
          alt={anagraphic.fullname.first+" "+anagraphic.fullname.middle[0]+". "+anagraphic.fullname.last}
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


function ContactIcons({digitalidentity}){
  let getIcon = ((profile, props) => {
    let icon = <FaQuestionCircle {...props}/>
    if(profile.platform == "Phone") icon = <FaPhone {...props}/>
    if(profile.platform == "GitHub") icon = <ImGithub {...props}/>
    if(profile.platform == "Telegram") icon = <FaTelegram {...props}/>
    if(profile.platform == "LinkedIn") icon = <FaLinkedin {...props}/>
    if(profile.platform == "Instagram") icon = <FaInstagram {...props}/>

    return  (
    <Tooltip
      label={profile.description}
      key={profile.platform}
      withArrow
    >
      <Link href={profile.link} passHref>
        <ActionIcon>
          {icon}
        </ActionIcon>
      </Link>
    </Tooltip>
   )
  })

  let icons = [];
  icons.push(getIcon({
    platform: "Phone",
    description: "Call me!",
    link: `tel:${digitalidentity.telephone}`
  }, {size: 34}))

  for(let profile of digitalidentity.profiles){
    icons.push(getIcon(profile, {size: 34}))
  }

  return <>
  <Group position="center" spacing={50}>
    {icons}
  </Group>
  </>
}

function RecentElements({elements, limit=3, title, element_link, more_link}){
  elements = elements.sort((a, b) => 
    (new Date(b.date.year, b.date.month, b.date.day))
    -
    (new Date(a.date.year, a.date.month, a.date.day))
  ).slice(0, limit)
  
  let list = elements.map((e, i) => (
    <Link key={i} href={element_link(e)} passHref>
      <Text align="center" component="a" variant="link" color="dimmed">{e.title}</Text>
    </Link>
  ))

  const theme = useMantineTheme();
  const borderColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]

  return <>
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section pt="sm" pb={0} style={{borderBottom: `1px solid ${borderColor}`}}>
        <Text weight={500} mb="xs" align="center" size="xl">{title}</Text>
      </Card.Section>

      <ScrollArea mt="lg" style={{ height: 150 }}>
        <Stack>
          {list}
        </Stack>
      </ScrollArea>

      <Center mt="xs">
        <Link href={more_link} pass>
          <Button variant="outline" mt="xl" radius="md">
            See more
          </Button>
        </Link>
      </Center>
    </Card>
</>
}

function Home({anagraphic, digitalidentity, publications, projects, lectures}){
  return <>
  <Stack>
    <Picture anagraphic={anagraphic}/>
    <Name anagraphic={anagraphic} />
    <ContactIcons digitalidentity={digitalidentity} />
    <Space h="xl" />
    <Grid justify="center" align="center" gutter="xl">
      <Grid.Col md={3} span={10}>
        <RecentElements
          elements={publications}
          title="Recent publications"
          more_link="/publications"
          element_link={e => "/publication/"+e.name}
        />
      </Grid.Col>
      <Grid.Col md={3} span={10}>
        <RecentElements
          elements={projects}
          title="Recent projects"
          limit={4}
          more_link="/projects"
          element_link={e => e.link}
        />
      </Grid.Col>
      <Grid.Col md={3} span={10}>
        <RecentElements
          elements={lectures}
          title="Recent lectures"
          more_link="/lectures"
          element_link={e => "/lectures"}
        />
      </Grid.Col>
    </Grid>
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