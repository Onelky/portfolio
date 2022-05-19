import React from 'react';
import Box from "@mui/material/Box";

interface Props {
    width?: string;
    height?: string;
    horizontal?: boolean;
}
const Line = ({width, height, horizontal = false}: Props) => {
    return (
        <Box component={'div'}
             sx={theme => ({
                 width: width || '90px',
                 height: height || '1.1px',
                 backgroundColor: '#58B5A9',
                 [theme.breakpoints.up(theme.breakpoints.values.md)]:{
                     transform: !horizontal && 'rotate(-90deg)',
                 }
             })}
        />

    );
};

export default Line;
