import React from 'react';
import Grid from "@mui/material/Grid";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";


const Layout = ({children}) :  JSX.Element => {
    return (
        <Grid container>
            <Grid item md={1}>
                <Contact/>
            </Grid>

            <Grid item md={10}>
                {children}
            </Grid>
            <Grid item md={1}
                  sx={{position: 'fixed', bottom: "1rem", right: 0}}
                  height="400px">
                <Menu/>
            </Grid>

        </Grid>
    );
};

export default Layout;
