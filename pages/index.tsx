import { Container, Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <Container maxWidth="sm" sx={{ minHeight: "100vh" }}>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Under construction
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
