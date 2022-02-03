import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import FormTextField from "../forms/FormTextField";
import api from "../utils/api";

const SearchBook = () => {

    const { control, handleSubmit } = useForm();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // api.get('/test').then(resp => {
        //     console.log(resp.data);
        // }).catch(error => {
        //     console.log(error);
        // });
    }, []);

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        api.get('/books/').then((resp) => {
            setSearchResults(resp.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <Container maxWidth={false}>
            <Typography variant="h4">TODO</Typography>

            <Paper>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormTextField
                                label="search"
                                name="search"
                                control={control} />

                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                            >Search</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Paper>
                <Grid container>
                    {searchResults?.map(searchResult => (
                        <Grid item xs={12}>
                            <Grid item xs={6}>
                                TODO
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

            </Paper>

            <Container>
                <Grid container>
                    {searchResults?.map((searchResult) => (
                            <Grid key={searchResult.id} item xs={12}>
                                <Typography variant="h2">{searchResult.title}</Typography>
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </Container >
    )
}

export default SearchBook;