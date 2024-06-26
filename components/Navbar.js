import { useEffect, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import {useRouter} from 'next/router';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },
    
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    
    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    
    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    
    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.md,
        fontWeight: 500,
        
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        
        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },
    
    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));


export function Navbar() {
    const links = [
        {
            "link": "/publications",
            "label": "Publications"
        },
        {
            "link": "/theses",
            "label": "Advised Theses"
        },
        {
            "link": "/projects",
            "label": "Projects"
        },
        {
            "link": "/lectures",
            "label": "Courses"
        }
    ]
    const [opened, { toggle, close }] = useDisclosure(false)
    const [active, setActive] = useState()
    const { classes, cx } = useStyles()
    const router = useRouter()
    
    useEffect(() => {
        for(let link of links){
            if(link.link == router.pathname) setActive(link.link)
        }
    }, [])

    const items = links.map((link) => (
        <Link href={link.link} key={link.label} passHref>
            <a className={cx(classes.link, { [classes.linkActive]: active === link.link })}>
            {link.label}
            </a>
        </Link>
    ))
        
    return (
        <Header height={HEADER_HEIGHT} mb={10} className={classes.root}>
        <Container className={classes.header}>
        <Link href="/"key="home-link" passHref>
            <a className={classes.link}>
            Home
            </a>
        </Link>
        <Group spacing={5} className={classes.links}>
        {items}
        </Group>
        
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
            {items}
            </Paper>
        )}
        </Transition>
        </Container>
        </Header>
    )
}