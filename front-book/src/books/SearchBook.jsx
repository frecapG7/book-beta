import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import FormTextField from "../forms/FormTextField";
import api from "../utils/api";

const SearchBook = () => {

    const { control, handleSubmit } = useForm();
    const { searchResults, setSearchResults } = useState([]);

    useEffect(() => {
        // api.get('/test').then(resp => {
        //     console.log(resp.data);
        // }).catch(error => {
        //     console.log(error);
        // });
    }, []);

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
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
        </Container >
    )
}

export default SearchBook;