import React, { FunctionComponent } from 'react';
import Icon from "../Icon/Icon";
import {Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

interface Props {
    label: string,
    name: string,
    horizontalLayout?: boolean,
    iconSize?: number,
}

const ToolIcon: FunctionComponent<Props> = (props) => {
    const { name,  label, iconSize = 30, horizontalLayout = false} = props;
    return (
        <Stack p={'5px'}
               height={'max-content'}
               alignItems={'center'}
               justifyContent={'center'}
               sx={{
                   flexDirection: horizontalLayout ? 'row' : 'column',
                   ':hover': {
                       transform: horizontalLayout ? 'none' : 'translateY(-5px)'
                   },
                   transition: 'all 400ms ease-in-out'
               }}>
            <Icon name={name} size={iconSize}></Icon>
            <Typography variant={'subtitle1'}
                        sx={{
                            color: 'var(--accent-color) !important',
                            ml: horizontalLayout && '2px',
                            fontSize: horizontalLayout && '14px !important',
                            whiteSpace: 'nowrap'
                        }}
            >
                {label}
            </Typography>

        </Stack>
    );
};

export default ToolIcon;
