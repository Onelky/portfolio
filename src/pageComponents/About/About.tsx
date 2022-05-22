import React from 'react';
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import BlueButton from "../../components/common/BlueButton/BlueButton";
import Stack from "@mui/material/Stack";

const PictureContainer = (): JSX.Element => {
    return(
        <>
            hii
        </>
    )
}
const DescriptionContainer = (): JSX.Element => {
    return(
        <>
            <SectionHeader title={'About me'}
                           linePosition={linePositions.right}
                           justifyContent={'end'}/>
            {/*<BlueButton text={'Resume'}/>*/}
        </>
    )
}
/* Page's first section that contains creator's name and animated arrows. */
const About = (): JSX.Element => {
    // todo: create picture container
    // todo: add DescriptionContainer
    // todo: style Description

    return (
        <Stack direction={{xs: 'column', md: 'row'}}
               mt={4}
               width={'100%'}
               minHeight={'465px'}
               sx={theme => ({
                       [theme.breakpoints.up(theme.breakpoints.values.md)]:{
                           justifyContent:'space-around',
                           alignItems: 'start'
                       },
                       [theme.breakpoints.down(theme.breakpoints.values.md)]:{
                           justifyContent:'start',
                           alignItems: 'center'

                       }
               })}
        >
            <PictureContainer/>
            <DescriptionContainer/>
        </Stack>
    );
};

export default About;
