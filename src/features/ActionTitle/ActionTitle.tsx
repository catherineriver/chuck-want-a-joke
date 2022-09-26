import * as React from 'react';

import PageTitle from "../../components/PageTitle/PageTitle";
import Select from "@mui/material/Select";
import {fetchJokeFromCategory} from "./actionTitleSlice";
import {useAppDispatch} from "../../app/hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from '@mui/material/MenuItem';
import {FormControl} from "@mui/material";

interface ActionTitleProps {
    category: string,
    categories: string[],
}


const ActionTitle: React.FC<ActionTitleProps> = ({category, categories}) => {
    const dispatch = useAppDispatch();

    const handleChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        dispatch(fetchJokeFromCategory(value)).then(() => localStorage.setItem('category', value));

    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <PageTitle title='Hey, Chuck!' />
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography
                    variant="h4"
                    lineHeight={1.7}
                    fontSize={{
                        xl: '2.5rem',
                        md: '2rem',
                        xs: '1.5rem'
                    }}>
                    Wanna hear joke about you and&nbsp;
                    <FormControl variant="standard" sx={{ minWidth: 100 }}>
                        <Select
                            sx={{
                                fontSize: {
                                    xl: '2.5rem',
                                    md: '2rem',
                                    xs: '1.5rem'
                                }}}
                            onChange={handleChange}
                            value={category ? category : 'food' }>
                                {categories.map((item) =>
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                )}
                        </Select>
                    </FormControl>
                    &nbsp;?
                </Typography>
            </Box>
        </Box>
    );
};
export default ActionTitle;
