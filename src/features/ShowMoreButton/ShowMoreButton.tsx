import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useAppDispatch} from "../../app/hooks";
import {fetchJokeFromCategory} from "./showMoreSlice";
import {Button} from "@mui/material";


const ShowMoreButton: React.FC = () => {
    const category = useSelector((state: RootState) => state.data.joke.categories)
    const dispatch = useAppDispatch();

    const handleClick = (value: string) => {
        dispatch(fetchJokeFromCategory(value))
        localStorage.setItem('category', value);
    }

    return (
        <Button
            variant="contained"
            onClick={() => handleClick(category)}
        >
            {category ? `tell me joke about ${category}` : 'make me laugh'}
        </Button>
    );
};
export default ShowMoreButton;
