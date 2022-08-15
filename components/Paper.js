import { Card, Stack, Group, Text, Stepper, CardSection, Grid, Button, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';

import { BiCodeBlock } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiDatabase } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"

export const Paper = (paper) => {
    const [bigScreen, setBigScreen] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setBigScreen(e.matches));
    }, []);

    let buttons = []

    if (paper.link) buttons.push(<>
        <Button leftIcon={<CgFileDocument />} variant="outline" href={paper.link}>
            Read paper
        </Button>
    </>)
    if (paper.code) buttons.push(<>
        <Button leftIcon={<BiCodeBlock />} variant="outline" href={paper.code}>
            Checkout code
        </Button>
    </>)
    if (paper.data) buttons.push(<>
        <Button leftIcon={<FiDatabase />} variant="outline" href={paper.data}>
            Download data
        </Button>
    </>)

    buttons.push(<>
        <Button leftIcon={<FaQuoteRight />} variant="outline" >
            Cite paper
        </Button>
    </>)


    return <>
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="lg">
                <Stack spacing={0}>
                    <Text align="center" size="xl" style={{paddingLeft: "10px", paddingRight: "10px"}}>{paper.title}</Text>
                    <Text align="center" color="dimmed" weight={400} style={{paddingLeft: "10px", paddingRight: "10px"}}>{paper.authors}</Text>
                </Stack>
            </Card.Section>

            <CardSection withBorder inheritPadding>
                <Grid justify="center" align="center">
                    <Grid.Col span={8}>
                        {bigScreen ? 
                        <Stepper active={paper.doi.length ? 3 : 2} breakpoint="sm" size="sm" orientation="horizontal">
                           <Stepper.Step label="Paper submitted" />
                           <Stepper.Step label="Under review" />
                           <Stepper.Step label="Published" />
                       </Stepper>
                        :
                        <Center>
                            <Stepper active={paper.doi.length ? 3 : 2} breakpoint="sm" size="sm" orientation="vertical">
                                <Stepper.Step label="Paper submitted" />
                                <Stepper.Step label="Under review" />
                                <Stepper.Step label="Published" />
                            </Stepper>
                        </Center>
                        }
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