import { Drawer, IconButton, Link, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

const NavDrawer = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <NavLink to="/" sx={{ color: 'unset' }}>
                        <ListItem button>
                            <ListItemText onClick={() => setOpenDrawer(false)}>Home
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/books" sx={{ color: 'unset' }}>
                        <ListItem button>
                            <ListItemText onClick={() => setOpenDrawer(false)}>Books
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );

}

export default NavDrawer;