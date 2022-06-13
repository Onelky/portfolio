import React, { FunctionComponent } from 'react';
import Stack from "@mui/material/Stack";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import getIconPath from "../../lib/utils";
import ToolIcon from "../../components/common/ToolIcon/ToolIcon";
import {styled} from "@mui/material/styles";

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

const TechnologyPill = styled(Grid)(() => ({
    background: 'rgba(2, 2, 4, 0.61)',
    borderRadius: 12,
    maxWidth: 'max-content !important',
    padding: '0 5px',
    ':hover': {
        transform: 'translateY(-3px)'
    },
    transition: 'all 400ms ease-in-out'
}))

const TechnologiesList = ({technologies}: {technologies: string[]}) => {
    return (
        <Grid container
              justifyContent={'center'}
              maxWidth={350}
              m={'10px auto'}
              rowGap={1}
              columnGap={1}
        >
            {
                technologies.map((name) => (
                    <TechnologyPill item key={getIconPath(name)} xs={3} md={4}>
                        <ToolIcon horizontalLayout label={name} iconSize={18} name={getIconPath(name)} />
                    </TechnologyPill>
                ))
            }

        </Grid>
    );
};


const Project: FunctionComponent<Props> = (props) => {
    const {projectName, technologies} = props

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
                <TechnologiesList technologies={technologies}/>

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
                     technologies={['Angular', 'TypeScript', 'Bootstrap', 'C Sharp', 'SQLite', 'Docker']}
                     demo={'#'}
                     github={'#'}
            />

        </Stack>
    );
};

export default Projects;
