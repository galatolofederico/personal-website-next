import { Card, Stack, Group, Text, Stepper, CardSection, Grid, Button, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { BiCodeBlock } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiDatabase } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"

export const Paper = (paper) => {
    const [bigScreen, setBigScreen] = useState(false)

    useEffect(() => {
        setBigScreen(window.matchMedia("(min-width: 768px)").matches)
    }, [])

    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setBigScreen(e.matches));
    }, []);

    let buttons = []

    if (paper.link) buttons.push((
        <Link key="paper-button" href={paper.link} passHref>
            <Button leftIcon={<CgFileDocument />} variant="outline">
                Read paper
            </Button>
        </Link>
    ))
    if (paper.code) buttons.push((
        <Link key="code-button" href={paper.code} passHref>
            <Button leftIcon={<BiCodeBlock />} variant="outline" href={paper.code}>
                Checkout code
            </Button>
        </Link>
    ))
    if (paper.data) buttons.push((
        <Link key="data-button" href={paper.data} passHref>
            <Button leftIcon={<FiDatabase />} variant="outline" href={paper.data}>
                Download data
            </Button>
        </Link>
    ))

    buttons.push((
        <Button key="cite-button" leftIcon={<FaQuoteRight />} variant="outline" >
            Cite paper
        </Button>
    ))


    return <>
        <Card shadow="sm" radius="md">
            <Card.Section py="lg">
                <Stack spacing={0}>
                    <Text align="center" size="xl" style={{paddingLeft: "10px", paddingRight: "10px"}}>{paper.title}</Text>
                    <Text align="center" color="dimmed" weight={400} style={{paddingLeft: "10px", paddingRight: "10px"}}>{paper.authors}</Text>
                </Stack>
            </Card.Section>

            <CardSection>
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

            <CardSection py="lg">
                <Text style={{ paddingRight: "3%", paddingLeft: "3%" }}>{paper.abstract}</Text>
            </CardSection>

            <CardSection py="lg">
                <Group position="center" spacing="xl">
                    {buttons}
                </Group>
            </CardSection>
        </Card>
    </>
}