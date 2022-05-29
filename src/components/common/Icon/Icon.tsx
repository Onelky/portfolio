import * as React from "react"
import {SvgIcon} from "@mui/material";
import getIconImage from "../../../lib/utils";


const Icon = ({name, size = 26, hoverColor = false, ...props}) => {
    const Icon = getIconImage(name);
    return <SvgIcon sx={{
        fontSize: size,
        ...(hoverColor && {
            ':hover': {
                color: 'var(--accent-color)',
                cursor: 'pointer'
            }
        })
    }}{...props}>
        <Icon/>
    </SvgIcon>

}

export default Icon
