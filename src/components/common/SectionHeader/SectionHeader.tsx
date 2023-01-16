import React from 'react';
import Line from "../Line/Line";
import Stack from "@mui/material/Stack";
import {LinePositions} from "../../../utils/constants";
import Typography from "@mui/material/Typography";

interface Props{
    title: string
    linePosition?: string
    justifyContent?: string
}
const SectionHeader = (props: Props) => {
    const {title, linePosition, justifyContent} = props;

    return (
        <Stack minWidth={'100%'} direction={'row'} spacing={2} justifyContent={justifyContent || 'center'} alignItems={'center'}>
            {
                linePosition !== LinePositions.right && (
                    <Line horizontal width={'100%'}/>
                )
            }
            <Typography variant={'h2'} sx={{whiteSpace: 'nowrap'}}>{title}</Typography>
            {
                linePosition !== LinePositions.left && (
                    <Line horizontal width={'100%'}/>
                )
            }
        </Stack>
    );
};

export default SectionHeader;
