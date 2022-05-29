import React from 'react';
import Grid from "@mui/material/Grid";
import ContactSideBar from "../ContactSideBar/ContactSideBar";
import Menu from "../Menu/Menu";


const Layout = ({children, showMenu}) :  JSX.Element => {
    return (
        <Grid container
              direction={{xs: 'column',md: 'row'}}
              pr={{xs: '5%', sm: 10, md: 15}}
              pl={{xs: '5%', sm: 10,md: 15}}>
            {
                showMenu && (
                    <Grid item
                          sx={{
                              position: {md: 'fixed'},
                              bottom: 0,
                              left: '1rem',
                              display:{xs: 'none', md: 'block'},
                          }}>
                        <ContactSideBar/>
                    </Grid>
                )
            }

            <Grid item xs={12} md={12}>
                {children}
            </Grid>
            {
                showMenu && (
                    <Grid item
                          height="420px"
                          sx={{ position: {md: 'fixed'}, bottom: "0", right: 0 }}>
                        <Menu/>
                    </Grid>
                )
            }

        </Grid>
    );
};

export default Layout;