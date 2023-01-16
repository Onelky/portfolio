import React, {type FunctionComponent} from 'react';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import {LinePositions, skillCards} from "../../utils/constants";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import SkillCards from "../../components/Skills/SkillCards/SkillCards";
import Languages from "../../components/Skills/Languages/Languages";

const Skills: FunctionComponent = () => {

  return (
      <Stack component={'section'}
             id="skills"
             justifyContent={'space-around'}
             mt={15}
             spacing={8}>
          <Box sx={{width: {xs: '100%', md: '50%'}}}>
              <SectionHeader title={'Tools & Skills'} linePosition={LinePositions.right}></SectionHeader>
          </Box>
          <SkillCards items={skillCards}/>
          <Languages/>
      </Stack>
  );
};

export default Skills;
