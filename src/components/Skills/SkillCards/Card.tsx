import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import React, { FunctionComponent } from 'react'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import getIconPath from '../../../lib/utils'
import ToolIcon from '../../common/ToolIcon/ToolIcon'
import { SkillCardProps } from './SkillCards'

const StyledContainer = styled(Grid)(() => ({
  backgroundColor: 'green',
  height: '380px',
  background: 'rgba(2, 2, 4, 0.55)',
  borderRadius: '10px',
  padding: '30px 15px 10px 15px',
  alignItems: 'space-evenly',
  justifyContent: 'space-evenly'
}))

const Card: FunctionComponent<SkillCardProps> = ({ title, icons }) => {
  return (
    <Stack
      alignItems={'center'}
      rowGap={1}
      sx={{
        minHeight: 410,
        width: { xs: 260, md: '30%', lg: 260 },
        maxWidth: 260
      }}
    >
      <Typography variant={'h3'}>{title || 'Front-end'}</Typography>

      <StyledContainer container>
        {icons.map((name) => (
          <Grid item key={getIconPath(name)} xs={6} height={'fit-content'}>
            <ToolIcon label={name} name={getIconPath(name)} />
          </Grid>
        ))}
      </StyledContainer>
    </Stack>
  )
}

export default Card
