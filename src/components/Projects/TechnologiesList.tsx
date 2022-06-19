import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import getIconPath from "../../lib/utils";
import ToolIcon from "../common/ToolIcon/ToolIcon";
import React from "react";

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
              columnGap={1}>
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

export default TechnologiesList;
