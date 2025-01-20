import { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, Toolbar } from "react95";
import { Comdlg32533, Computer4, Progman23, Shell32166 } from "@react95/icons";
import { useWindowContext } from "../assets/scripts/WindowContext.jsx";

export function Footer() {
    const {toggleWindow } = useWindowContext();
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
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/75862623?s=96&v=4"
                            alt='react95 logo'
                            style={{ height: '25px', marginRight: 4 }}
                        />
                        Start
                    </Button>
                    {open && (
                        <MenuList
                            style={{
                                position: 'absolute',
                                left: '-5px',
                                top: '-12em'
                            }}
                            onClick={() => setOpen(false)} // Closes the menu on any click
                        >
                            <MenuListItem onClick={() => handleClick('CV')}>
                                <Comdlg32533 variant="32x32_4" /> CV
                            </MenuListItem>
                            <MenuListItem onClick={() => handleClick('Mail')}>
                                <Progman23 variant="32x32_4" /> Mail
                            </MenuListItem>
                            <MenuListItem onClick={() => handleClick('Github')}>
                                <Computer4 variant="32x32_4" /> Github
                            </MenuListItem>
                            <MenuListItem onClick={() => handleClick('Instagram')}>
                                <Shell32166 variant="32x32_4" /> Instagram
                            </MenuListItem>
                            <Separator />
                        </MenuList>
                    )}
                </div>
                Made with ❤️ using React & React95
            </Toolbar>
        </AppBar>
    );
}
