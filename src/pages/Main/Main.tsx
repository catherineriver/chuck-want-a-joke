import * as React from 'react';
import Container from '@mui/material/Container';
import ActionTitle from "../ActionTitle/ActionTitle";
import Joke from "../Joke/Joke";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const Main = () => {
    const joke = useSelector((state: RootState) => state.data.joke)

    return (
        <Box sx={{
            position: 'relative',
            height: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            '&::before': {
                content: '""',
                display: 'block',
                background: 'url(https://i.ibb.co/yYLswXS/Chuck.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom right',
                position: 'absolute',
                right: 0,
                bottom: '-50px',
                width: '40%',
                height: '100%',
                "@media (max-width: 425px)": {
                    width: '75%',
                    height: '50%',
                },
                "@media (max-width: 768px)": {
                    width: '60%',
                },
            },

        }}>
            <Container maxWidth="xl">
                <ActionTitle />
                {joke && <Joke joke={joke} />}
                <ShowMoreButton />
            </Container>
        </Box>

    );
};

export default Main;
