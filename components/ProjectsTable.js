import { Table, Badge, Text, Group } from '@mantine/core';

const tagsColors = {
    "unipi": "indigo",
    "personal": "orange",
    "research": "lime",
    "linux": "red"
}

export const ProjectsTable = ({projects}) => {
    projects.sort((a, b) => 
        (new Date(b.date.year, b.date.month, b.date.day))
        -
        (new Date(a.date.year, a.date.month, a.date.day))
    )
    const rows = projects.map((project) => {
        const badges = project.tags.map((tag, i) => (<Badge key={i} style={{marginRight: "3px", marginLeft: "3px"}} size="xs">{tag}</Badge> ))
        const handle = () => {
            window.open(project.link)
        }
        return (
            <tr key={project.name} onClick={handle}>
                <td><Text weight={700}>{project.title} {badges}</Text></td>
                <td>{project.description}</td>
            </tr>
        )
    })

    return (
        <Table fontSize="md" highlightOnHover style={{cursor: "pointer"}}>
            <colgroup>
                <col span="1" style={{"width": "30%"}} />
                <col span="1" style={{"width": "70%"}} />
            </colgroup>
            <tbody>{rows}</tbody>
        </Table>
    )
}