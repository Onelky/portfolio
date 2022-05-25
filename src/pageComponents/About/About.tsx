import React from 'react';
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import BlueButton from "../../components/common/BlueButton/BlueButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from 'next/image'
import avatar from '../../../public/images/onelky-avatar.png'
import Box from "@mui/material/Box";

const Picture = (): JSX.Element => {
    return(
        <Box sx={{
            position: 'relative',
            width: {xs: '300px', sm: '350px', lg: '400px', xl: '500px'},
            height: {xs: '300px', sm: '350px', lg: '400px', xl: '500px'},
        }}>
            <Image src={avatar} layout="fill" />
        </Box>
    )
}
const DescriptionContainer = (): JSX.Element => {
    return(
        <Stack sx={{width: '50%'}}>
            Description
        </Stack>
    )
}
const About = (): JSX.Element => {
    // todo: add DescriptionContainer
    // todo: style Description

    return (
        <Grid container
              direction='column'
              mt={4}
              width={'100%'}>

            <Grid item xs={2}
                  display={'flex'}
                  flex-direction={'column'}
                  width={{xs: '100%',md: '50%' }}
                  alignSelf={'end'}
                  height={'36px'}>
                <SectionHeader title={'About me'}
                               linePosition={linePositions.right}
                               justifyContent={'end'}/>

            </Grid>
            <Grid item xs={10} width='100%'>
                <Grid container
                      mt={3}
                      alignItems={'center'}
                      rowSpacing={4}
                      flexWrap={'nowrap'}
                      direction={{xs: 'column', md: 'row'}}>

                    <Grid item md={6} display={'flex'} justifyContent={'center'}>
                        <Picture/>
                    </Grid>

                    <Grid item md={6}>
                        <DescriptionContainer/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default About;
