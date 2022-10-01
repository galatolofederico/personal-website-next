import { Table, Text, Badge, Group } from '@mantine/core';

export const ThesesTable = ({ theses }) => {
    theses.sort((a, b) =>
        (new Date(b.date.year, b.date.month, b.date.day))
        -
        (new Date(a.date.year, a.date.month, a.date.day))
    )
    const rows = theses.map((thesis, i) => {
        return (
            <tr key={i}>
                <td><Text weight={700}>{thesis.title} <Badge>{thesis.type}</Badge></Text></td>
                <td>{thesis.author}</td>
            </tr>
        )
    })
    
    return (
        <Table fontSize="md" highlightOnHover>
            <tbody>{rows}</tbody>
        </Table>
    )
}