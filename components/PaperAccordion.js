import { Group, Avatar, Text, Accordion } from '@mantine/core';


const AccordionLabel = ({ label, image, description }) => {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  )
}

const PaperAccordionItem = ({ name, title, authors, abstract }) => {
  return (
    <Accordion.Item
      label={
        <AccordionLabel
          label={title}
          image="https://img.icons8.com/clouds/256/000000/futurama-bender.png"
          description={authors}
        />}
      key={name}
    >
      <Text size="sm">{abstract}</Text>
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