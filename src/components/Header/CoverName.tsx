import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { NAME } from '../../utils/constants'

const AnimatedBorder = styled('div')`
  text-align: center;
  border-radius: 12px;
  width: 190px;
  height: 100px;
  border-image-slice: 10;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    width: 150%;
    height: 150%;
    background-image: conic-gradient(from 270deg, transparent 65%, #63c9bc49 100%);
    top: -25%;
    left: -25%;
    z-index: 1;
    animation: rotate 8s linear infinite;
  }

  &::after {
    position: absolute;
    content: '';
    width: 150%;
    height: 150%;
    background-image: conic-gradient(from 180deg, transparent 65%, #58b5a9);
    top: -25%;
    left: -25%;
    z-index: 2;
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const Text = styled(Typography)`
  position: absolute;
  width: 96%;
  height: 96%;
  top: 2%;
  left: 2%;
  background: #0a0919;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoverName = (): JSX.Element => {
  return (
    <AnimatedBorder>
      <Text variant="h1">{NAME}</Text>
    </AnimatedBorder>
  )
}

export default CoverName
