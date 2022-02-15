import { AppBar, Box, Container, Link, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import { NavLink } from "react-router-dom";
import NavDrawer from "./NavDrawer";

const NavBar = ({ children }) => {

    return (
        <Container>
            <AppBar position="static" sx={{ mb: 5, bgcolor: '#FBF8F8' }}>
                <Toolbar>

                    <Typography variant="h6">Navbar</Typography>
                    {isMobile ?
                        (<NavDrawer />) :

                        (
                            <Container sx={{ justifyContent: 'flex-end', px: 3 }} >
                                <List sx={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end'}}>
                                    <NavLink to="/" sx={{ color: 'unset' }}>
                                        <ListItem button>
                                            <ListItemText>Home</ListItemText>
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/books/search" sx={{ color: 'unset' }}>
                                        <ListItem button>
                                            <ListItemText>Search books</ListItemText>
                                        </ListItem>
                                    </NavLink>
                                </List>
                            </Container>
                        )

                    }

                </Toolbar>

            </AppBar>
            {children}
        </Container>

    );
}

export default NavBar;