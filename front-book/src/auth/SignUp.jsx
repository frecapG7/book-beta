import { Container } from "@mui/material";
import { useForm } from "react-hook-form";



const SignUp = () => {

    const {handleSubmit} = useForm();
    return (
        <Container>

            <form noValidate onSubmit={handleSubmit}>

            </form>

        </Container>
    );
}

export default SignUp;