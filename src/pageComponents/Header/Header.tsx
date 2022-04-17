import React from 'react';
import CoverName from "../../components/CoverName/CoverName";
import Arrows from "../../components/Arrows/Arrows";
import Grid from "@mui/material/Grid";

/* Page's first section that contains creator's name and animated arrows. */
const Header = (): JSX.Element => {
    return (
        <Grid container
              role="header"
              height="100vh"
              flexWrap={'nowrap'}
              direction={'column'}
              alignItems="center">

            <Grid item display={'flex'} alignItems="center" xs={10} role={'coverName'}>
                <CoverName/>
            </Grid>

            <Grid item xs={2} role={'arrows'}>
                <Arrows/>
            </Grid>

        </Grid>
    );
};

export default Header;
