import { Button, Group, Table, Text } from '@mantine/core';

export const LecturesTable = ({lectures}) => {
    lectures.sort((a, b) => 
        (new Date(b.date.year, b.date.month, b.date.day))
        -
        (new Date(a.date.year, a.date.month, a.date.day))
    )
    const rows = lectures.map((lecture) => {
        const buttons = lecture.resources.map(r => (<Button size="xs" compact onClick={() => window.open(r.link)}>{r.name}</Button>))
        return <>
            <tr key={lecture.name}>
                <td>{lecture.title}</td>
                <td>{lecture.container} - <Text color="dimmed">{lecture.position}</Text></td>
                <td><Group >{buttons}</Group></td>
            </tr>
        </>
    })

    return (
        <Table fontSize="md" highlightOnHover>
            <tbody>{rows}</tbody>
        </Table>
    )
}