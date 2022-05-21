import * as React from "react"
import {SvgIcon} from "@mui/material";

const Icon = ({svg: SvgImg, ...props}) => (
    <SvgIcon sx={{
        fontSize: 26,
        ':hover': {
            color: 'var(--accent-color)',
            cursor: 'pointer'
        }
    }}{...props}>
        <SvgImg/>
    </SvgIcon>

)

export default Icon
