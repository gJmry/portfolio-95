import {useState} from "react";
import {AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar} from "react95";

export function Footer() {
    const [open, setOpen] = useState(false);

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
                                left: '0',
                                top: '-10em'
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <MenuListItem>
                                Profile
                            </MenuListItem>
                            <MenuListItem>
                                My account
                            </MenuListItem>
                            <Separator/>
                            <MenuListItem>

                                Logout
                            </MenuListItem>
                        </MenuList>
                    )}
                </div>

                Made with ❤️ using React & React95
            </Toolbar>
        </AppBar>
    );
}