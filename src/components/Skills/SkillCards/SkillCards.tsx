import React, { FunctionComponent } from 'react'
import Stack from '@mui/material/Stack'
import Card from './Card'

export interface SkillCardProps {
  title: string
  icons: string[]
}

interface Props {
  items: SkillCardProps[]
}

const SkillCards: FunctionComponent<Props> = ({ items }) => {
  return (
    <Stack
      spacing={{ xs: 5, md: 0 }}
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
      {items.map((item) => (
        <Card key={item.title} title={item.title} icons={item.icons}></Card>
      ))}
    </Stack>
  )
}

export default SkillCards
