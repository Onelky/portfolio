import React, { FunctionComponent } from 'react';
import Stack from "@mui/material/Stack";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Box  from '@mui/material/Box';
import SkillCards from "../../components/Skills/SkillCards/SkillCards";
import skillCards from "../../constants/skillCards";
import Languages from "../../components/Skills/Languages/Languages";

const Skills: FunctionComponent = () => {

  return (
      <Stack justifyContent={'space-around'} mt={15} spacing={8}>
          <Box sx={{width: {xs: '100%', md: '50%'}}}>
              <SectionHeader title={'Tools & Skills'} linePosition={linePositions.right}></SectionHeader>
          </Box>
          <SkillCards items={skillCards}/>
          <Languages/>
      </Stack>
  );
};

export default Skills;
