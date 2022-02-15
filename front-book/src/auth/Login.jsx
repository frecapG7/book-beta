import { Box, Button, Container, FormHelperText, Grid, Paper, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import FormTextField from "../forms/FormTextField";
import NavBar from "../navigation/NavBar";
import { useApiContext } from "../provider/ApiProvider";
import api from "../utils/api";
import { $temporaryMessage } from "../utils/utils";

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    const { apiContext, setApiContext } = useApiContext();

    const { t } = useTranslation(['login, errors']);

    const onSubmit = (data) => {

        api.post('/login', data)
            .then((resp) => {
                setApiContext({
                    isConnected: true,
                    user: resp.data
                });
                localStorage.setItem('accessToken', resp.data.accessToken);
                localStorage.setItem('refreshToken', resp.data.refreshToken);
                // check if coming from app
                if (location.state?.from.pathname) navigate(location.state.from.pathname)

                //else go home
                navigate("/");
            }).catch((err) => {
                debugger
                // Error handling (maybe in separate method)
                if (!err || err.status === 500) {
                    setLoginError('internalServerError');
                } else if (err.status === 401) {
                    setLoginError('wrongPassword');
                } else if (err.status === 403) {
                    setLoginError('403 forbidden' + err.data.message);
                } else if (err.status === 404) {
                    setLoginError('userNotFound');
                } else {
                    setLoginError('unknownError');
                }
            });
    }

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
        }}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}>
                <div>
                    <p>This is logo</p>
                </div>
                <Box my={1}>
                    <Typography variant="h3">{t('login:login', 'Login')}</Typography>
                </Box>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <FormTextField
                        control={control}
                        name="email"
                        label="Email"
                        rules={{ required: true }}
                        errorMessage={$temporaryMessage(errors.email)}

                    />

                    <FormTextField
                        control={control}
                        name="password"
                        label="Password"
                        rules={{ required: true }}
                        errorMessage={$temporaryMessage(errors.password)}
                    />

                    <Box textAlign="center">
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            variant="contained"
                        >Login</Button>
                    </Box>
                    {loginError && (
                        <Grid container justifyContent="center">
                            <FormHelperText error={true}>{t(`errors:${loginError}`, loginError)}</FormHelperText>
                        </Grid>
                    )}

                </form>
            </Paper>
        </Container >

    );
}
export default Login;