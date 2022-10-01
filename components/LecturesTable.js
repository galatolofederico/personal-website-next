import { Button, Group, Stack, Table, Text } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export const LecturesTable = ({ lectures }) => {
    const [bigScreen, setBigScreen] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setBigScreen(e.matches));
    }, []);


    lectures.sort((a, b) =>
        (new Date(b.date.year, b.date.month, b.date.day))
        -
        (new Date(a.date.year, a.date.month, a.date.day))
    )
    const rows = lectures.map((lecture) => {
        const buttons = lecture.resources.map(r => (<Button size="xs" compact onClick={() => window.open(r.link)}>{r.name}</Button>))
        return (
            <tr key={lecture.name}>
                <td><Text weight={700}>{lecture.title}</Text></td>
                {bigScreen ?
                <td>
                    <Stack spacing={0}>
                        <Text size="sm">{lecture.container}</Text>
                        <Text size="sm" color="dimmed">{lecture.position}</Text>
                    </Stack>
                </td>
                : <></>
                }
                <td><Group >{buttons}</Group></td>
            </tr>
        )
    })

    return (
        <Table fontSize="md" highlightOnHover>
            <tbody>{rows}</tbody>
        </Table>
    )
}