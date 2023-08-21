import React, { FC, PropsWithChildren } from 'react'
import Grid from '@mui/material/Grid'
import ContactSideBar from '../ContactSideBar/ContactSideBar'
import Menu from '../Menu/Menu'

type LayoutProps = {
  showMenu: boolean
}
const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, showMenu }) => {
  return (
    <Grid container direction={{ xs: 'column', md: 'row' }} pr={{ xs: 5, md: 10 }} pl={{ xs: 5, md: 10 }}>
      {showMenu && (
        <Grid
          item
          sx={{
            position: { md: 'fixed' },
            bottom: 0,
            left: '1rem',
            display: { xs: 'none', md: 'block' }
          }}>
          <ContactSideBar />
        </Grid>
      )}

      <Grid item xs={12} md={12}>
        {children}
      </Grid>
      {showMenu && (
        <Grid item sx={{ height: { md: 420 }, position: { md: 'fixed' }, bottom: '0', right: 0 }}>
          <Menu />
        </Grid>
      )}
    </Grid>
  )
}

export default Layout
