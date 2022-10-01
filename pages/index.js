import { Grid, Stack, Group, Center, Image, Text, ActionIcon, Tooltip } from '@mantine/core';
import { FaInstagram, FaLinkedin, FaPhone, FaQuestionCircle, FaTelegram } from "react-icons/fa"
import { ImGithub } from "react-icons/im"
import { Navbar } from '../components/Navbar';
import fsPromises from 'fs/promises';
import path from 'path';
import Link from 'next/link';


function Picture({anagraphic}){
  return <>
    <Grid justify="center" align="center">
      <Grid.Col span={5} xs={4} sm={3} md={2} lg={2} xl={1.5}>
        <Image
          radius={1000}
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

    return  <>
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
  </>
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

function Home({anagraphic, digitalidentity, publications, projects, lectures}){
  return <>
  <Stack>
    <Picture anagraphic={anagraphic}/>
    <Name anagraphic={anagraphic} />
    <ContactIcons digitalidentity={digitalidentity} />
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