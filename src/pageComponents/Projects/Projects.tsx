import React, { FunctionComponent } from 'react';
import Stack from "@mui/material/Stack";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TechnologiesList from "../../components/Projects/TechnologiesList";
import {Project, project1} from "../../constants/projects";
import Icon from "../../components/common/Icon/Icon";
import getIconPath from "../../lib/utils";
import {demo, github} from "../../constants/iconNames";

// todo: Add constant file with all this

// todo: Add responsive image and text above image
// todo: Add images of projects, add effects

export interface Props {
    project: Project,
    containerDirection?: string,
}

const Project = ({project, containerDirection} : Props ) => {
    const {projectName, technologies, description, githubUrl, demoUrl} = project;

    return (
        <Grid container justifyContent={'space-around'} direction={containerDirection || 'row'}>
            <Grid item xs={12} md={6} sx={{backgroundColor: 'green'}}>
                Picture
            </Grid>
            <Grid item xs={12} md={6} p={'0 70px'}>
                <Typography variant={'h3'}
                            textAlign={'center'}
                            letterSpacing={'2px'}
                            fontWeight={400}>
                    {projectName}
                </Typography>
                <TechnologiesList technologies={technologies}/>
                <Typography paragraph sx={{ textAlign: {xs: 'center', md: 'justify'}, m: {xs: '2rem 0rem'}}}>
                    {description}
                </Typography>

                <Stack spacing={1} direction={'row'} justifyContent={'center'}>
                    <a target="_blank" href={githubUrl}>
                        <Icon name={getIconPath(github)}  size={30} useHoverEffect/>
                    </a>
                    <a target="_blank" href={demoUrl}>
                        <Icon name={getIconPath(demo)} size={25} useHoverEffect/>
                    </a>
                </Stack>
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
            <Project project={project1} />
            <Project project={project1} containerDirection={'row-reverse'}/>

        </Stack>
    );
};

export default Projects;
