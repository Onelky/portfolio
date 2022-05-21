import React from 'react';
import Grid from "@mui/material/Grid";
import ContactSideBar from "../Contact/ContactSideBar";
import Menu from "../Menu/Menu";


const Layout = ({children, showMenu}) :  JSX.Element => {
    return (
        <Grid container direction={{xs: 'column',md: 'row'}} pr={12} pl={12}>
            {
                showMenu && (
                    <Grid item display={{ md: 'block'}}
                          sx={theme => ({
                              [theme.breakpoints.up(theme.breakpoints.values.md)]:{
                                  position: 'fixed', bottom: "0", left: '2rem'
                              }})
                          }>
                        <ContactSideBar/>
                    </Grid>
                )
            }

            <Grid item xs={10} md={12}>
                {children}
            </Grid>
            {
                showMenu && (
                    <Grid item
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
