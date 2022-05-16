import React from 'react';
import Grid from "@mui/material/Grid";
import Contact from "../Contact/Contact";
import Menu from "../Menu/Menu";


const Layout = ({children, showMenu}) :  JSX.Element => {
    return (
        <Grid container direction={{xs: 'column',md: 'row'}}>
            <Grid item lg={1} display={{xs: 'none', md: 'block'}}>
                <Contact/>
            </Grid>

            <Grid item xs={10} md={10}>
                {children}
            </Grid>
            {
                showMenu && (
                    <Grid item xs={2} md={1}
                          sx={theme => ({
                              [theme.breakpoints.up(theme.breakpoints.values.md)]:{
                                  position: 'fixed', bottom: "1rem", right: 0
                              }
                          })}
                          height="400px">
                        <Menu/>
                    </Grid>
                )
            }

        </Grid>
    );
};

export default Layout;
