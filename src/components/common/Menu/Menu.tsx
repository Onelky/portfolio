import React from 'react';
import {styled, useTheme} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import {menuItems} from "../../../utils/constants";
import Icon from '@mui/material/Icon';
import Line from "../Line/Line";
import {Link} from "react-scroll";

const MenuItem = styled(Link)(({theme}) => ({
    fontFamily: 'Dosis, serif',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    textAlign: 'center',
    background: 'transparent',
    ':active': {
        color: 'var(--accent-color)',
    },
    ':hover': {
        color: 'var(--accent-color)',
        cursor: 'pointer'
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]:{
        transform: 'rotate(90deg)',
    }
}));




const Sections = () :  JSX.Element  => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Stack direction={{xs: 'row',md: 'column'}}
               justifyContent={{xs: 'center', md: 'space-around'}}
               spacing={{xs: 2, md: 5}}
               width={'max-content'}
               alignItems={'center'}
               component={'nav'}
               sx={theme => ({
                   [theme.breakpoints.down(theme.breakpoints.values.md)]:{
                       zIndex: 2,
                       backgroundColor: 'rgba(0,0,0, 0.3)',
                       padding: '1rem 1.7rem',
                       borderRadius: '16px',
                       position: 'fixed',
                       bottom: "1rem",
                       left: '50%',
                       transform: 'translateX(-50%)',
                       backdropFilter: 'blur(15px)',
                   }
               })}>
            {
                menuItems && menuItems.map((item) => {
                    const Icon = item.icon;
                    return isMobile
                        ?
                        (
                            <Link key={`${item.name}`}
                                  offset={-50}
                                  activeClass="activeMenuItem"
                                  smooth
                                  spy
                                  to={item.sectionId}>
                                <Icon key={item.name} sx={{
                                    '& :hover': {
                                        color: '#58B5A9',
                                        cursor: 'pointer'
                                    }
                                }}/>
                            </Link>
                        )
                        : (
                            <MenuItem key={`${item.name}`}
                                      offset={-50}
                                      activeClass="activeMenuItem"
                                      smooth
                                      spy
                                      to={item.sectionId}>
                                {item.name}
                            </MenuItem>
                        )

                })
            }
        </Stack>
    );
};

const Menu = () :  JSX.Element => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack direction={{xs: 'row',md: 'column'}}
               height="100%"
               alignItems={'center'}
               justifyContent={{xs: 'center', md: 'space-between'}}>

            <Sections />
            {
                !isMobile && (
                    <Line/>
                )
            }

        </Stack>
    );
};

export default Menu;
