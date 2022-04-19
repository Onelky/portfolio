import React from 'react';
import Grid from "@mui/material/Grid";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";


const Layout = ({children}) :  JSX.Element => {
    return (
        <Grid container>
            <Grid item>
                <Contact/>
            </Grid>

            <Grid item>
                {children}
            </Grid>
            <Grid item>
                <Menu/>
            </Grid>

        </Grid>
    );
};

export default Layout;
