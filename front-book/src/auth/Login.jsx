import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormTextField from "../forms/FormTextField";
import api from "../utils/api";

const Login = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        api.get('http://localhost:3001/test').then(resp => console.log(JSON.stringify(resp))
            .catch(err => console.log(err)));
    }

    return (
        <Container>
            <Typography variant="h3">Login</Typography>
            <Paper elevation={4}>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container>
                        <Grid item sm={6}>
                            <FormTextField
                                control={control}
                                name={"email"}
                                label={"Email"}
                                rules={{ required: true }}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <FormTextField
                                control={control}
                                name={"password"}
                                label={"Password"} />
                        </Grid>
                        <Grid item sm={6}>
                            <Button type="submit" onClick={handleSubmit}>Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>

    );
}
export default Login;