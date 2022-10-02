import { Card, Stack, Group, Text, Stepper, CardSection, Grid, Button, Center, Modal, Code, CopyButton, Tooltip, ActionIcon } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { useClipboard } from '@mantine/hooks';

import { BiCodeBlock } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiDatabase } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"

function buildBibtex(paper){
    let entry = paper.title.split(" ")[0].toLowerCase()+paper.year
    let author = paper.authors.split(",").join(". and ")

    return `@article{${entry},
    author={${author}},
    title={${paper.title}},
    journal={${paper.journal}},
    year={${paper.year}},
    volume={${paper.volume}},
    pages={${paper.pages}},
    publisher={${paper.publisher}},
    doi={${paper.doi}},
    issn={${paper.issn}},
}
`
}

function buildAPA(paper){
    return `${paper.authors}. "${paper.title}" ${paper.journal} ${paper.volume} (${paper.year}): ${paper.pages}.`
}

export const Paper = (paper) => {
    const [bigScreen, setBigScreen] = useState(false)
    const [showCitation, setShowCitation] = useState(false)
    const clipboard = useClipboard({ timeout: 500 })

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
        <Button key="cite-button" leftIcon={<FaQuoteRight />} variant="outline" onClick={() => setShowCitation(true)} >
            Cite paper
        </Button>
    ))


    function CodePreview({code}){
        return <>
            <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} withArrow position="right">
                <ActionIcon color={clipboard.copied ? 'teal' : 'gray'} onClick={() => clipboard.copy(code)}>
                    {clipboard.copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
                </ActionIcon>
            </Tooltip>
            <Code block>
                {code}
            </Code>
        </>
    }

    const modal = (
        <Modal
        opened={showCitation}
        onClose={() => setShowCitation(false)}
        title=""
        size="xl"
        >
            <Stack>
                <Text>BibTeX citation</Text>
                <Tooltip label={clipboard.copied ? 'Copied' : 'Copy'} withArrow position="right">
                        <ActionIcon color={clipboard.copied ? 'teal' : 'gray'} onClick={() => clipboard.copy(buildBibtex(paper))}>
                            {clipboard.copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
                        </ActionIcon>
                    </Tooltip>
                <Code block>
                    {buildBibtex(paper)}
                </Code>
                <Text>APA citation</Text>
                <Code block>
                    {buildAPA(paper)}
                </Code>
            </Stack>

        </Modal>
    )

    return <>
        {modal}
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