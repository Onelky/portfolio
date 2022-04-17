import React from 'react';
import {styled} from "@mui/material/styles";


const ArrowAnimation = styled('div')`
  cursor: pointer;
  span{
    display: block;
    width: 24px;
    height: 24px;
    border-bottom: 5px solid var(--accent-color);
    border-right: 5px solid var(--accent-color);
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2.5s infinite;
  }
  span:nth-child(2){
    animation-delay: -0.2s;
  }
  span:nth-child(3){
    animation-delay: -0.4s;
  }
  @keyframes animate {
    0%{
      opacity: 0;
      transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: rotate(45deg) translate(20px,20px);
    }

`;

const Arrows = () :  JSX.Element => {
    return (
        <ArrowAnimation>
            <span/>
            <span/>
            <span/>
        </ArrowAnimation>
    );
};

export default Arrows;
