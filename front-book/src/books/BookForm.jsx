
import { Button, Container, Grid, Typography } from "@mui/material";
import ErrorStackParser from "error-stack-parser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormCheckbox from "../forms/FormCheckbox";
import FormSelectField from "../forms/FormSelectField";
import FormTextField from "../forms/FormTextField";
import NavBar from "../navigation/NavBar";
import api from "../utils/api";

import { country } from '../utils/constants';


const BookForm = ({ id }) => {

    const isAddMode = !id;
    const { control, formState: { errors }, reset, handleSubmit } = useForm();

    useEffect(() => {
        console.log('Fetch if is not null');
        if (isAddMode) {
            api.get(`/books/${id}`).then(resp => {
                reset(resp.data);
            }).catch(error => console.log(error));
        }
    }, [id, isAddMode, reset]);


    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }

    return (
        <NavBar>
            <Container>
                <Typography variant="h3">{isAddMode ? 'Add a new book' : 'Edit book'}</Typography>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormTextField
                                name="title"
                                label="Title"
                                control={control}
                                rules={{ required: true }}
                                errorMessage={errors.title} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                name="author"
                                label="Author"
                                control={control}
                                rules={{ required: true }}
                                errorMessage={errors.author} />
                        </Grid>

                        <Grid item xs={12}>
                            <FormSelectField
                                values={country}
                                control={control}
                                name="originCountry"
                                label="Origin country"
                                nullable
                            />
                        </Grid>

                        {/* Test checkbox */}
                        <Grid item xs={12}>
                            <FormCheckbox
                                name="test"
                                label="test"
                                control={control} />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                variant="contained"
                            >Submit</Button>

                        </Grid>
                    </Grid>
                </form>

            </Container >
        </NavBar>
    );
}

export default BookForm;

