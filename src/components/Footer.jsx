import React, { useState } from 'react';
import { AppBar, Button, MenuList, MenuListItem, Separator, Toolbar, Tooltip } from 'react95';
import { Comdlg32533, Computer4, FlyingThroughSpace100, FolderExe2, Progman23, Shell32166, Star } from '@react95/icons';
import styled from 'styled-components';
import { useWindowContext } from '../assets/scripts/WindowContext.jsx';

const FooterBar = styled(AppBar)`
    position: fixed;
    top: 95%;
    width: 100%;
    z-index: 10;
`;

const StartMenuContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StartMenuList = styled(MenuList)`
    position: absolute;
    left: -5px;
    top: -21em;
    width: 12em;
`;

const ExternalLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const windowMenuItems = [
    { label: 'About Me', windowName: 'About', Icon: Comdlg32533 },
    { label: 'Projects', windowName: 'Projects', Icon: FolderExe2 },
    { label: 'Experiences', windowName: 'Experiences', Icon: FlyingThroughSpace100 },
    { label: 'Skills', windowName: 'Skills', Icon: Star },
];

const externalMenuItems = [
    {
        href: 'https://fr.linkedin.com/in/j%C3%A9r%C3%A9my-girard-b554b6251?trk=public_profile_browsemap',
        label: 'Contact Me',
        Icon: Progman23,
    },
    {
        href: 'https://github.com/gJmry',
        label: 'My Github',
        Icon: Computer4,
    },
    {
        href: 'https://www.instagram.com/jemery_girard?igsh=MWZlNnppanZjNHBtMQ==',
        label: 'My Instagram',
        Icon: Shell32166,
    },
];

export function Footer() {
    const { toggleWindow } = useWindowContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleWindowClick = (windowName) => {
        toggleWindow(windowName);
        setMenuOpen(false);
    };

    return (
        <FooterBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <StartMenuContainer>
                    <Button onClick={() => setMenuOpen(!menuOpen)} active={menuOpen}>
                        <img
                            src="https://avatars.githubusercontent.com/u/75862623?s=96&v=4"
                            alt="avatar"
                            style={{ height: '25px', marginRight: 4 }}
                        />
                        Start
                    </Button>
                    {menuOpen && (
                        <StartMenuList onClick={() => setMenuOpen(false)}>
                            {windowMenuItems.map(({ label, windowName, Icon }) => (
                                <MenuListItem
                                    key={windowName}
                                    style={{ fontSize: '16px' }}
                                    onClick={() => handleWindowClick(windowName)}
                                >
                                    <Icon variant="32x32_4" /> {label}
                                </MenuListItem>
                            ))}
                            <Separator />
                            {externalMenuItems.map(({ href, label, Icon }) => (
                                <ExternalLink key={label} href={href} target="_blank">
                                    <MenuListItem style={{ fontSize: '16px' }}>
                                        <Icon variant="32x32_4" /> {label}
                                    </MenuListItem>
                                </ExternalLink>
                            ))}
                        </StartMenuList>
                    )}
                </StartMenuContainer>
                <div>
                    Made with
                    <Tooltip text="What are you looking at? 👀" enterDelay={100} leaveDelay={100}>
                        ❤️
                    </Tooltip>
                    using React & React95
                </div>
                <div>Jeremy Girard - {new Date().getFullYear()}</div>
            </Toolbar>
        </FooterBar>
    );
}
