import React from 'react';
import Line from "../Line/Line";
import Stack from "@mui/material/Stack";
import linePositions from "../../../constants/sectionHeader";
import Typography from "@mui/material/Typography";
interface Props{
    title: string
    linePosition?: string
    justifyContent?: string
}
const SectionHeader = (props: Props) => {
    const {title, linePosition, justifyContent} = props;

    return (
        <Stack direction={'row'} spacing={2} justifyContent={justifyContent || 'center'} alignItems={'center'}>
            {
                linePosition !== linePositions.right && (
                    <Line horizontal width={'40%'}/>
                )
            }
            <Typography variant={'h2'} sx={{width: '10%'}}>{title}</Typography>
            {
                linePosition !== linePositions.left && (
                    <Line horizontal width={'40%'}/>
                )
            }
        </Stack>
    );
};

export default SectionHeader;
