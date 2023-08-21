import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Link } from 'react-scroll'

const ArrowAnimation = styled('div')`
  cursor: pointer;

  span {
    display: block;
    width: 24px;
    height: 24px;
    border-bottom: 5px solid var(--accent-color);
    border-right: 5px solid var(--accent-color);
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2.5s infinite;
  }

  span:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  span:nth-of-type(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }

`

const Arrows: FC = () => {
  return (
    <Link offset={-50} activeClass="activeMenuItem" smooth to={'about'}>
      <ArrowAnimation>
        <span />
        <span />
        <span />
      </ArrowAnimation>
    </Link>
  )
}

export default Arrows
