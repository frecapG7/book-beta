import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <Container>
            <Typography variant="h3">This is home</Typography>
            <Container className="menu">
                <ul>
                    <li><Link to="/login" >Login</Link> </li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </Container>
        </Container>
    );
}

export default Home;