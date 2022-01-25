import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormTextField from "../forms/FormTextField";

const Login = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
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
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <FormTextField
                                control={control}
                                name={"password"}
                                label={"Password"}/>
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