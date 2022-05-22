import React from 'react';
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

const AnimatedContainer = styled(Button)(()=> ({
    position: 'relative',
    fontSize:'16px',
    fontWeight: 400,
    lineHeight: '45px',
    width: '150px',
    height: '50px',
    textAlign: 'center',
    color: 'var(--accent-color)',
    cursor: 'pointer',
    letterSpacing: '1px',
    transitionProperty: 'all',
    transitionDuration: '.6s',
    transitionTimingFunction: 'ease',
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

const BlueButton = ({text, onClick, ...props}: { text: string, onClick: any}) => {

    return (
        <AnimatedContainer onClick={onClick} {...props}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            {text}
        </AnimatedContainer>
    );
};

export default BlueButton;
