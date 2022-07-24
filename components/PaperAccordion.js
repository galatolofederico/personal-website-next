import { Group, Tooltip, Text, Accordion, Button, Stack } from '@mantine/core';
import { IoIosPaper } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiDatabase } from "react-icons/fi"
import { HiPresentationChartBar } from "react-icons/hi"
import { ThemeIcon } from '@mantine/core';

const SmallPaperBadges = (paper) => {
  let badges = [];
  if (paper.link) badges.push(
    <Tooltip
      label="Paper available"
      key="paper-icon"
      withArrow
    >
      <ThemeIcon variant="light" color="gray" size="sm"><CgFileDocument /></ThemeIcon>
    </Tooltip>
  )
  if (paper.code) badges.push(
    <Tooltip
      label="Open source code available"
      key="code-icon"
      withArrow
    >
      <ThemeIcon variant="light" color="gray" size="sm"><BiCodeBlock /></ThemeIcon>
    </Tooltip>
  )
  if (paper.data) badges.push(
    <Tooltip
      label="Dataset available"
      key="data-icon"
      withArrow
    >
      <ThemeIcon variant="light" color="gray" size="sm"><FiDatabase /></ThemeIcon>
    </Tooltip>
  )
  return <Group noWrap spacing="xs">{badges}</Group>
}

const AccordionLabel = (paper) => {
  const badges = SmallPaperBadges(paper)
  return (
    <Group noWrap>
      <ThemeIcon color="dark">
        {(paper.type == "journal") ?
        <IoIosPaper />
        :
        <HiPresentationChartBar />
        }
      </ThemeIcon>
      <div>
        <Group noWrap>
          <Text>{paper.title}</Text>
          {badges}
        </Group>
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
      <Stack align="center">
        <Text size="md" style={{paddingLeft: "20px"}}>{paper.abstract}</Text>
        <Button>See more</Button>
      </Stack>
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