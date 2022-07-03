import React from 'react';
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import BlueButton from "../../components/common/BlueButton/BlueButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from 'next/image'
import avatar from '../../../public/images/onelky-avatar-cut.png'
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {descriptionParagraph} from "../../constants/about";
import {Link} from "react-scroll";

const Picture = (): JSX.Element => {
    return(
        <Box sx={{
            position: 'relative',
            width: {xs: '300px', sm: '300px',  },
            height: {xs: '300px', sm: '300px', },
        }}>
            <Image src={avatar} layout="fill" objectFit={'cover'} />
        </Box>
    )
}

const Content = (): JSX.Element => {
    return(
        <Stack direction={'column'}
               justifyContent={'space-around'}
               minHeight={'100%'}
               alignItems={'center'}>
            <Typography paragraph
                        sx={{
                            textAlignLast: {xs: 'center', sm: 'justify'},
                            textAlign: 'justify',
                            m: {xs: '2rem 1rem', md: 0}
                        }}>
                {descriptionParagraph}
            </Typography>
            <Stack direction={'row'}
                   spacing={{ xs: 2, sm: 3,}}
                   justifyContent={'center'}>

                <a href={'/docs/resume.pdf'} target="_blank">
                    <BlueButton text={'Resume'}/>
                </a>
                <Link smooth to={'contact'}>
                    <BlueButton text={'Say Hello'}/>
                </Link>
            </Stack>
        </Stack>

    )
}
const About = (): JSX.Element => {
    return (
        <Grid container
              id="about"
              component={'section'}
              direction='column'
              mt={4}
              width={'100%'}>

            <Grid item xs={2}
                  ml={{md: 'auto'}}
                  width={{xs: '100%',md: '50%' }}
                  height={'36px'}>
                <SectionHeader title={'About me'}
                               linePosition={linePositions.right}
                               justifyContent={'start'}/>

            </Grid>
            <Grid item xs={12} width='100%'>
                <Grid container
                      mt={3}
                      flexWrap={'nowrap'}
                      direction={{xs: 'column', md: 'row'}}>

                    <Grid item md={6} display={'flex'} justifyContent={'center'}>
                        <Picture/>
                    </Grid>

                    <Grid item md={6}>
                        <Content/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default About;
