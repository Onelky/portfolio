import React, {type FC} from 'react';
import Button, {type ButtonProps} from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import {darken} from "@mui/material";

const AnimatedContainer = styled(Button)<ButtonProps>(()=> ({
    position: 'relative',
    fontSize:'16px',
    fontWeight: 400,
    lineHeight: '45px',
    width: '150px',
    height: '50px',
    textAlign: 'center',
    cursor: 'pointer',
    letterSpacing: '1px',
    transitionProperty: 'all',
    transitionDuration: '.6s',
    transitionTimingFunction: 'ease',
    span: {
        color: 'var(--accent-color)',
    },
    '&.Mui-disabled': {
        span: { color: darken('#58B5A9', 0.4)},
        rect: {
            stroke:  darken('#58B5A9', 0.4),
        },
    },
    svg: {
        position: 'absolute',
        borderRadius: '4px',
        width: '150px',
        height: '50px',
        left: 0,
        top: 0,
    },
    rect: {
        stroke: 'var(--accent-color)',
        borderRadius: '4px',
        position: 'absolute',
        strokeWidth: 2,
        strokeDasharray: '420, 0',
        transition: 'all 0.35s linear',
    },
    ':hover':{
        background:'transparent',
        fontWeight: '900',
        letterSpacing: '3px',
        rect:{
            strokeWidth: 5,
            strokeDasharray: '15, 310',
            strokeDashoffset: 54,
            transition: 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)'
        }
    }
}));

interface Props extends ButtonProps{
    text: string,
}
const BlueButton: FC<Props>  = ({text, onClick, type, ...other}) => {

    return (
        <AnimatedContainer onClick={onClick} type={type || 'button'} {...other}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            <span>
                {text}
            </span>
        </AnimatedContainer>
    );
};

export default BlueButton;
