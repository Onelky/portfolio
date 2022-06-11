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
                    <Card title={item.title} icons={item.icons}></Card>
                ))
            }
        </Stack>
    );
};

export default SkillCards;
