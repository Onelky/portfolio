import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'

interface Props {
  name: string
  size?: number
  color?: string
  useHoverEffect?: boolean
  other?: object
}
const Icon = ({ name, size = 26, color, useHoverEffect = false, ...other }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  if (useHoverEffect) {
    // @ts-ignore
    other.onMouseOver = () => {
      setIsHovered(true)
    }
    // @ts-ignore
    other.onMouseLeave = () => {
      setIsHovered(false)
    }
  }
  return (
    <Box sx={{ position: 'relative', width: size, height: size, minWidth: size, minHeight: size }} {...other}>
      <Image alt={`${name} icon`} src={`/icons/${name + (isHovered ? 'Hover' : '')}.svg`} layout={'fill'} />
    </Box>
  )
}

export default Icon
