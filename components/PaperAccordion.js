import { Group, ActionIcon, Text, Accordion, Badge, Grid } from '@mantine/core';
import { IoIosPaper } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi"
import { ThemeIcon } from '@mantine/core';

const SmallPaperBadges = (paper) => {
  let badges = [];
  if (paper.link) badges.push(
    <Badge key="link-badge" sx={{ paddingLeft: 5, paddingRight: 5 }} size="lg" radius="xl">
      <ThemeIcon color="dark"><BiCodeBlock /></ThemeIcon>
    </Badge>
  )
  if (paper.code) badges.push(
    <Badge key="code-badge" sx={{ paddingLeft: 5, paddingRight: 5 }} size="lg" radius="xl">
      <ThemeIcon color="dark"><BiCodeBlock /></ThemeIcon>
    </Badge>
  )
  if (paper.data) badges.push(
    <Badge key="data-badge" sx={{ paddingLeft: 5, paddingRight: 5 }} size="lg" radius="xl">
      <ThemeIcon color="dark"><BiCodeBlock /></ThemeIcon>
    </Badge>
  )
  return <Group noWrap spacing="xs" >{badges}</Group>
}

const AccordionLabel = (paper) => {
  const badges = SmallPaperBadges(paper)
  console.log(badges)
  return (
    <Group noWrap>
      <ThemeIcon color="dark">
        <IoIosPaper />
      </ThemeIcon>
      <div>
        <Grid grow>
          <Grid.Col span={9}>
            <Text>{paper.title}</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            {badges}
          </Grid.Col>
        </Grid>
        <Text size="sm" color="dimmed" weight={400}>
          {paper.authors}
        </Text>
      </div>
    </Group>
  )
}

const PaperAccordionItem = (paper) => {
  return (
    <Accordion.Item
      label={
        <AccordionLabel
          {...paper}
        />}
      key={paper.name}
    >
      <Text size="sm">{paper.abstract}</Text>
    </Accordion.Item>
  )
}

export const PaperAccordion = ({ papers }) => {
  const items = papers.map(e => PaperAccordionItem(e))
  return <>
    <Accordion initialItem={-1} iconPosition="right">
      {items}
    </Accordion>
  </>
}