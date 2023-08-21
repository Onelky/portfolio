import React from 'react'
import Box from '@mui/material/Box'

interface Props {
  width?: string
  height?: string
  horizontal?: boolean
}
const defaultHeight = '90px'
const defaultWidth = '1.2px'

const Line = ({ width, height, horizontal = false }: Props) => {
  return (
    <Box
      component={'div'}
      sx={() => ({
        width: width || (horizontal ? defaultHeight : defaultWidth),
        height: height || (horizontal ? defaultWidth : defaultHeight),
        backgroundColor: '#58B5A9'
      })}
    />
  )
}

export default Line
