import { AppBar, Box, Container, Link, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import NavDrawer from "./NavDrawer";

const NavBar = ({ children }) => {

    const { t } = useTranslation(['navigation']);

    return (
        <Container maxWidth>
            <AppBar position="static" sx={{ mb: 5, bgcolor: '#FBF8F8' }}>
                <Toolbar>

                    <NavLink to="/">
                        <Typography variant="h6">{t('navigation:home', 'home')}</Typography>
                    </NavLink>
                    {isMobile ?
                        (<NavDrawer />) :

                        (
                            <Container sx={{ justifyContent: 'flex-end', px: 3 }} >
                                <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <NavLink to="/books/search" sx={{ color: 'unset' }}>
                                        <ListItem button>
                                            <ListItemText>{t('navigation:searchBooks', 'search books')}</ListItemText>
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