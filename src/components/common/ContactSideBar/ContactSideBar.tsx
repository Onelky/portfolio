import React from 'react';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Line from "../Line/Line";
import Stack from "@mui/material/Stack";
import Icon from "../Icon/Icon";
import {email, github, linkedIn} from "../../../constants/iconNames";
import getIconPath from "../../../lib/utils";

const IconsContainer = ({isMobile}) => {
    return (
        <Stack direction={isMobile ? "row" : "column"} spacing={1}>
            <a target="_blank" style={{height: '26px'}} href={'https://github.com/Onelky/'}>
                <Icon name={getIconPath(github)} useHoverEffect/>
            </a>
            <a target="_blank" style={{height: '26px'}} href={'https://www.linkedin.com/in/onelky/'}>
                <Icon name={getIconPath(linkedIn)} useHoverEffect/>
            </a>
            <a target="_blank" href="mailto:onelky.hernandez29@gmail.com" style={{height: '26px'}}>
                <Icon name={getIconPath(email)} useHoverEffect/>
            </a>
        </Stack>
    );
};

const ContactSideBar = (props) :  JSX.Element => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Stack {...props}
              direction={{xs: 'row',md: 'column'}}
              alignItems={'center'}
               spacing={2}
              justifyContent={{xs: 'center', md: 'space-between'}}
              sx={{justifyContent: {md: 'space-between'}, height:"200px"}}>
            {
                isMobile && (
                        <Line horizontal/>

                )
            }
                <IconsContainer isMobile={isMobile}/>
                <Line horizontal={isMobile}/>

        </Stack>
    );
};

export default ContactSideBar;
