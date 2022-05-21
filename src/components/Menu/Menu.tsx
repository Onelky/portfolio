import React from 'react';
import {styled, useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import {menuItems} from "../../constants/menu";
import Icon from '@mui/material/Icon';
import Line from "../common/Line/Line";

const MenuItem = styled(Typography)(({theme}) => ({
    fontFamily: 'Dosis, serif',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    textAlign: 'center',
    background: 'transparent',
    '& :hover': {
        color: '#58B5A9',
        cursor: 'pointer'
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]:{
        transform: 'rotate(90deg)',
    }
}));




const Sections = ({isMobile}) :  JSX.Element  => {
    return (
        <Stack direction={{xs: 'row',md: 'column'}}
               justifyContent={{xs: 'center', md: 'space-around'}}
               spacing={{xs: 3, md: 5}}
               width={'max-content'}
               alignItems={'center'}
               component={'nav'}
               sx={theme => ({
                   [theme.breakpoints.down(theme.breakpoints.values.md)]:{
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
                        ? <Icon key={item.name} sx={{
                            '& :hover': {
                                color: '#58B5A9',
                                cursor: 'pointer'
                            }
                        }}/>
                        : <MenuItem key={`${item.name}`} variant='subtitle1'>{item.name}</MenuItem>

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

            <Sections isMobile={isMobile}/>
            {
                !isMobile && (
                    <Line/>
                )
            }

        </Stack>
    );
};

export default Menu;
