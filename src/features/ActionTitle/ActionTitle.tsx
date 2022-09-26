import * as React from 'react';
import Typography from '@mui/material/Typography';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title}) => {
    return (
        <Typography
            variant="h2"
            noWrap
        >
            {title}
        </Typography>
    );
};
export default PageTitle;
