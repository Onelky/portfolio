import React, { type FunctionComponent } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { LinePositions, skillCards } from '../../utils/constants'
import SectionHeader from '../../components/common/SectionHeader/SectionHeader'
import SkillCards from '../../components/Skills/SkillCards/SkillCards'
import Languages from '../../components/Skills/Languages/Languages'
import { useIsElementVisible } from '../../utils/hooks'
import { Grow } from '@mui/material'

const Skills: FunctionComponent = () => {
  const { ref, isVisible } = useIsElementVisible()

  return (
    <Grow in={isVisible} timeout={500}>
      <Stack ref={ref} component={'section'} id="skills" justifyContent={'space-around'} mt={15} spacing={8}>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <SectionHeader title={'Tools & Skills'} linePosition={LinePositions.right}></SectionHeader>
        </Box>
        <SkillCards items={skillCards} />
        <Languages />
      </Stack>
    </Grow>
  )
}

export default Skills
