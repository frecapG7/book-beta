import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApiContext } from "../provider/ApiProvider";



const Home = () => {

    const { apiContext } = useApiContext();
    const navigate = useNavigate();

    useEffect(() => {
        debugger
        if(!apiContext?.isConnected) navigate('/login');
    });

    return (
        <Container>
            <Typography variant="h3">This is home</Typography>
            <Container className="menu">
                <ul>
                    <li><Link to="/books/search">Search book</Link></li>
                </ul>
            </Container>
        </Container>
    );
}

export default Home;