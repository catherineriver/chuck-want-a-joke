import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import useLocalStorage from "../../app/useLocalStorage";
import {useAppDispatch} from "../../app/hooks";
import {fetchJokeFromCategory} from "../Main/mainSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {Button} from "@mui/material";


const MoreButton: React.FC = () => {
    const category = useSelector((state: RootState) => state.data.joke.categories)
    const { previousCategory, addToLocalStorage } = useLocalStorage();
    const dispatch = useAppDispatch();

    const handleClick = (value: string) => {
        dispatch(fetchJokeFromCategory(value))
            .then(unwrapResult)
            .then((originalPromiseResult) => {
                addToLocalStorage(value);
            })
            .catch((rejectedValueOrSerializedError) => {
                // handle result here
            })
    }

    return (
        <Button
            variant="contained"
            onClick={() => handleClick(category)}
        >
            {category}
        </Button>
    );
};
export default MoreButton;
