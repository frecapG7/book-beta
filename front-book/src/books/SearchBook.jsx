import { Container, Typography } from "@mui/material"
import { useEffect } from "react"
import api from "../utils/api";

const SearchBook = () => {


    useEffect(() => {
        api.get('/test').then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <Container fullWidth={false}>
            <Typography variant="h4">TODO</Typography>
        </Container>
    );
}

export default SearchBook;