import * as React from "react"
import {SvgIcon} from "@mui/material";
import {email, github, linkedIn} from "../../constants/iconNames";
import GithubSvg from '../../../public/icons/github.svg'
import LinkedInSvg from '../../../public/icons/linkedIn.svg'
import EmailSvg from '../../../public/icons/email.svg'

const getImage = (iconName) => {
    if (iconName === github) return <GithubSvg/>;
    if (iconName === linkedIn) return <LinkedInSvg/>;
    if (iconName === email) return <EmailSvg/>;
}

const Icon = ({name, hoverColor = false, ...props}) => (
    <SvgIcon sx={{
        fontSize: 26,
        ...(hoverColor && {
            ':hover': {
            color: 'var(--accent-color)',
            cursor: 'pointer'
        }})
    }}{...props}>
        {getImage(name)}
    </SvgIcon>

)

export default Icon
