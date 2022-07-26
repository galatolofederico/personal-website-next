import { Card, Stack, Group, Text, Stepper, CardSection, Grid, Button } from '@mantine/core';

import { BiCodeBlock } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiDatabase } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"

export const Paper = (paper) => {
    let buttons = []

    if (paper.link) buttons.push(<>
        <Button leftIcon={<CgFileDocument />} variant="outline">
            Read paper
        </Button>
    </>)
    if (paper.code) buttons.push(<>
        <Button leftIcon={<BiCodeBlock />} variant="outline">
            Checkout code
        </Button>
    </>)
    if (paper.data) buttons.push(<>
        <Button leftIcon={<FiDatabase />} variant="outline">
            Download Data
        </Button>
    </>)

    buttons.push(<>
        <Button leftIcon={<FaQuoteRight />} variant="outline">
            Cite paper
        </Button>
    </>)


    return <>
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="lg">
                <Stack spacing={0}>
                    <Text align="center" size="xl">{paper.title}</Text>
                    <Text align="center" color="dimmed" weight={400}>{paper.authors}</Text>
                </Stack>
            </Card.Section>

            <CardSection withBorder inheritPadding>
                <Grid justify="center" align="center">
                    <Grid.Col span={8}>
                        <Stepper active={paper.doi.length ? 3 : 2} breakpoint="sm" size="sm">
                            <Stepper.Step label="Paper submitted" />
                            <Stepper.Step label="Under review" />
                            <Stepper.Step label="Published" />
                        </Stepper>
                    </Grid.Col>
                </Grid>
            </CardSection>

            <CardSection withBorder inheritPadding py="lg">
                <Text style={{ paddingRight: "3%", paddingLeft: "3%" }}>{paper.abstract}</Text>
            </CardSection>

            <CardSection withBorder inheritPadding py="lg">
                <Group position="center" spacing="xl">
                    {buttons}
                </Group>
            </CardSection>
        </Card>
    </>
}