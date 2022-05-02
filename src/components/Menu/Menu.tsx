import React from 'react';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const MenuItem = styled(Typography)`
  font-family: 'Dosis', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  transform: rotate(90deg);
  :hover {
    color: #58B5A9;
    cursor: pointer;
  }
`;

// todo: maybe refactor this into a separate component. Props will be: size and orientation.
const Line = styled('div')`
  width: 90px;
  height: 1.1px;
  background-color: #58B5A9;
  transform: rotate(-90deg)
`;

const Sections = () :  JSX.Element  => {
    return (
        <Stack direction={'column'} height={'85%'} justifyContent={'space-around'} alignItems={'center'}>
            <MenuItem variant='subtitle1'>Home</MenuItem>
            <MenuItem variant='subtitle1'>About</MenuItem>
            <MenuItem variant='subtitle1'>Skills</MenuItem>
            <MenuItem variant='subtitle1'>Projects</MenuItem>

            <MenuItem variant='subtitle1'>Contact</MenuItem>
        </Stack>
    );
};

const Menu = () :  JSX.Element => {
    return (
        <Grid container
              direction={'column'}
              height="100%"
              alignItems={'center'}
              justifyContent={'space-between'}>
            <Grid item md={11}>
                <Sections/>
            </Grid>
            <Grid item  md={1}>
                <Line/>
            </Grid>

        </Grid>
    );
};

export default Menu;
