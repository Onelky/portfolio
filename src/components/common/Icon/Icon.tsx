import * as React from "react"
import {SvgIcon} from "@mui/material";
import getIconImage from "../../../lib/utils";

interface Props {
    name: string,
    size?: number,
    color?: string,
    hoverColor?: boolean
}
const Icon = ({name, size = 26, color,  hoverColor = false, ...props}: Props) => {
    const Icon = getIconImage(name);
    return (
        <SvgIcon
            sx={{
                fontSize: size,
                svg: {width: 'auto', height: 'auto'},
                ...(hoverColor && {
                    ':hover': {
                        color: color || 'var(--accent-color)',
                        cursor: 'pointer'
                    }
                })
            }}
            {...props}>
            <Icon/>
        </SvgIcon>)

}

export default Icon
