import React, {FunctionComponent} from 'react';
import Stack from "@mui/material/Stack";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TechnologiesList from "../../components/Projects/TechnologiesList";
import {Project, projects} from "../../constants/projects";
import Icon from "../../components/common/Icon/Icon";
import getIconPath from "../../lib/utils";
import {demo, github} from "../../constants/iconNames";
import Image from "next/image";

export interface Props {
    project: Project,
    containerDirection?: string,
}
// todo: Add responsive design to image and text above image

const Project = ({project, containerDirection = 'row'} : Props ) => {
    const {projectName, technologies, imagePath, description, githubUrl, demoUrl} = project;

    return (
        <Grid container
              justifyContent={'space-around'}
              flexDirection={containerDirection}>
            <Grid item
                  xs={12}
                  md={6}
                  width={560}
                  height={310}
                  position={'relative'}
                  sx={{
                      '& span::before': {
                          zIndex: 1,
                          position: 'absolute',
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          background: 'rgba(88, 181, 169, 0.4)',
                          content: '""',
                          cursor: 'pointer',
                      },
                      '& :hover::before': {
                          background: 'rgba(59,70,121,0.4)',
                      }
                  }}
            >
                <a target="_blank" href={demoUrl}>
                    <Image src={ `/images/${imagePath}.png`} layout={'fill'}></Image>
                </a>
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
    return (
        <Stack justifyContent={'space-around'} mt={15} spacing={8} component={'section'}>
            <Box sx={{width: {xs: '100%', md: '50%'}}}>
                <SectionHeader title={'Projects'} linePosition={linePositions.right}/>
            </Box>
            {
                projects.map((project, index) => (
                    <Project key={project.id} project={project} containerDirection={(index % 2 !== 0) &&  'row-reverse'} />
                ))
            }
        </Stack>
    );
};

export default Projects;
