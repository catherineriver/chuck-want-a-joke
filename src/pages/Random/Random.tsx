import * as React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {CircularProgress, Container} from "@mui/material";
import RandomJoke from "../../features/RandomJoke/RandomJoke";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const Random = () => {
    const loading = useSelector((state: RootState) => state.random_joke.status)
    return (
        <Container maxWidth="xl">
            <PageTitle title="Random joke" align="center" />
            <RandomJoke />
        </Container>
    );
};

export default Random;
