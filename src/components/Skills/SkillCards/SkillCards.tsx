import React, { FunctionComponent } from 'react';
import Stack from "@mui/material/Stack";
import Card from "./Card";

export interface SkillCardProps {
    title: string,
    icons: string[]
}

interface Props {
    items: SkillCardProps[]
}
// todo: update all names of icons
const SkillCards: FunctionComponent<Props> = ({items}) => {
    return (
        <Stack justifyContent={'space-around'}
               columnGap={2}
               rowGap={5}
               sx={{
                   flexDirection: {xs: 'column', md: 'row'},
                   alignItems: 'center'
               }}
        >
            {
                items.map((item) => (
                    <Card key={item.title} title={item.title} icons={item.icons}></Card>
                ))
            }
        </Stack>
    );
};

export default SkillCards;
