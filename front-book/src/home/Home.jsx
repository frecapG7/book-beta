import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useApiContext } from "../provider/ApiProvider";



const Home = () => {

    const { apiContext } = useApiContext();
    const navigate = useNavigate();
    
    const {t, i18n} = useTranslation(['home', 'translation', ['books']]);
    const changeLanguage = code => {
        i18n.changeLanguage(code);
    }

    useEffect(() => {
        if(!apiContext?.isConnected) navigate('/login');
    });

    return (
        <Container>
            <section>
                <Button type="button" variant="contained" onClick={() => changeLanguage('fr')}>{t('translation:fr','FR')}</Button>
                <Button type="button" variant="contained" onClick={() => changeLanguage('en')}>{t('translation:en','EN')}</Button>
            </section>
            <Typography variant="h3">{t('home:title','Title')}</Typography>
            <Container className="menu">
                <ul>
                    <li><Link to="/books/search">{t('books:searchBooks', 'search book')}</Link></li>
                </ul>
            </Container>
        </Container>
    );
}

export default Home;