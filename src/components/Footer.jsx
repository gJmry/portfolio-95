import React, {useState} from "react";
import {AppBar, Button, MenuList, MenuListItem, Separator, Toolbar, Tooltip} from "react95";
import {Comdlg32533, Computer4, FlyingThroughSpace100, FolderExe2, Progman23, Shell32166, Star} from "@react95/icons";
import {useWindowContext} from "../assets/scripts/WindowContext.jsx";

export function Footer() {
    const {toggleWindow} = useWindowContext();
    const [open, setOpen] = useState(false);

    const handleClick = (windowName) => {
        toggleWindow(windowName);
        setOpen(false);
    };

    return (
        <AppBar
            style={{
                position: "fixed",
                top: '95%',
                width: "100%",
                zIndex: 10,
            }}
        >
            <Toolbar style={{justifyContent: 'space-between'}}>
                <div style={{position: 'relative', display: 'inline-block'}}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/75862623?s=96&v=4"
                            alt='react95 logo'
                            style={{height: '25px', marginRight: 4}}
                        />
                        Start
                    </Button>
                    {open && (
                        <MenuList
                            style={{
                                position: 'absolute',
                                left: '-5px',
                                top: '-21em',
                                width: '12em'
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('About')}>
                                <Comdlg32533 variant="32x32_4"/> About Me
                            </MenuListItem>
                            <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('Projects')}>
                                <FolderExe2 variant="32x32_4"/> Projects
                            </MenuListItem>
                            <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('Experiences')}>
                                <FlyingThroughSpace100 variant="32x32_4"/> Experiences
                            </MenuListItem>
                            <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('Skills')}>
                                <Star variant="32x32_4"/> Skills
                            </MenuListItem>


                            <Separator/>
                            <a href={"https://fr.linkedin.com/in/j%C3%A9r%C3%A9my-girard-b554b6251?trk=public_profile_browsemap"} target={"_blank"}>
                                <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('Mail')}>
                                    <Progman23 variant="32x32_4"/> Contact Me
                                </MenuListItem>
                            </a>
                            <a href={"https://github.com/gJmry"} target={"_blank"}>
                                <MenuListItem style={{fontSize: '16px'}} onClick={() => handleClick('Github')}>
                                    <Computer4 variant="32x32_4"/> My Github
                                </MenuListItem>
                            </a>
                            <a href={"https://www.instagram.com/jemery_girard?igsh=MWZlNnppanZjNHBtMQ=="}
                               target={"_blank"}>
                                <MenuListItem style={{fontSize: '14px'}}
                                              onClick={() => handleClick('Instagram')}>
                                    <Shell32166 variant="32x32_4"/> My Instagram
                                </MenuListItem>
                            </a>
                        </MenuList>
                    )}
                </div>
                <div>
                    Made with
                    <Tooltip text='What are you looking at ? 🤷‍' enterDelay={100} leaveDelay={100}>
                        ❤️
                    </Tooltip>
                    using React & React95
                </div>

                <div>
                    © Jérémy Girard - 2025
                </div>
            </Toolbar>
        </AppBar>
    );
}
