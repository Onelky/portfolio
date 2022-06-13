import React, { FunctionComponent } from 'react';
import Stack from "@mui/material/Stack";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// todo: Add constant file with all this

interface Props {
    projectName: string,
    picture: string,
    technologies: string[],
    description: string,
    demo: string,
    github: string
}
// todo: Add responsive image and text above image
// todo: Add images of projects, add effects
// todo: Add github and demo links
// todo: Add description
// todo: Customize the toolIcon, have a different background



const Project: FunctionComponent<Props> = (props) => {
    const {projectName} = props

    return (
        <Grid container justifyContent={'space-around'}>
            <Grid item xs={12} md={6}>
                Picture
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant={'h3'}
                            textAlign={'center'}
                            letterSpacing={'2px'}
                            fontWeight={400}>
                    {projectName}
                </Typography>
                Description

            </Grid>
        </Grid>
    );
};
const Projects: FunctionComponent = () => {

    // todo: Add content component
    // todo: Work on the structure of projects

    return (
        <Stack justifyContent={'space-around'} mt={15} spacing={8}>
            <Box sx={{width: {xs: '100%', md: '50%'}}}>
                <SectionHeader title={'Projects'} linePosition={linePositions.right}/>
            </Box>
            <Project projectName={'MyTasks'}
                     picture={'#'}
                     description={'Lorem ipsun'}
                     technologies={['Angular']}
                     demo={'#'}
                     github={'#'}
            />

        </Stack>
    );
};

export default Projects;
