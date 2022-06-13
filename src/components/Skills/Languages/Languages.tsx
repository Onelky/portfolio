import React from 'react';
import Stack from "@mui/material/Stack";
import {Typography} from "@mui/material";
import Icon from "../../common/Icon/Icon";

interface Language {
    key: string,
    icon: string,
    label: string,
    iSpeakPhrase: string
}
const languages: Language[] = [
    {key: 'english', icon: 'englishFlag', label: 'English', iSpeakPhrase: 'I speak'},
    {key: 'spanish', icon: 'spainFlag', label: 'Español', iSpeakPhrase: 'Yo hablo'},
]

const Language = ({language}: {language: Language}) => {
    return (
        <Stack direction={'row'}
               minWidth={170}
               justifyContent={'space-evenly'}
               alignItems={'center'}>
            <Typography variant={'h3'}>
                {language.iSpeakPhrase}
            </Typography>

            <Typography variant={'h3'} sx={{fontWeight: '500 !important'}}>
                {language.label}
            </Typography>
            <Icon name={language.icon}/>
        </Stack>
    );
};

const Languages = () => {
    return (
        <Stack minHeight={{xs: 100, md: 60}}
               minWidth={{xs: 260,md: 350}}
               flexDirection={{xs: 'column', md: 'row'}}
               alignSelf={'center'}
               justifyContent={'space-evenly'}
               alignItems={'center'}
               sx={{
                   background: 'rgba(2, 2, 4, 0.61)',
                   borderRadius: '10px',
               }}
        >
            {
                languages.map((language) => (
                    <Language key={language.key} language={language}/>
                ))
            }
        </Stack>
    );
};

export default Languages;