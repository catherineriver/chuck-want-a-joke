import * as React from 'react';
import {useAppDispatch} from "../../app/hooks";
import {fetchRandomJoke} from "./randomJokeSlice";
import Joke from "../../components/Joke/Joke";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Box, Button, CircularProgress} from "@mui/material";


const RandomJoke: React.FC = () => {
    const dispatch = useAppDispatch();
    const {joke, status} = useSelector((state: RootState) => state.random_joke)

    useEffect(() => {
        console.log('fetch');
        dispatch(fetchRandomJoke());
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {status === 'succeeded' ? <Joke joke={joke} /> : <CircularProgress />}
            <Box my={3} alignContent='center'>
                <Button
                    variant="contained"
                    onClick={() => dispatch(fetchRandomJoke())}
                >
                    another one
                </Button>
            </Box>
        </Box>
    );
};
export default RandomJoke;
