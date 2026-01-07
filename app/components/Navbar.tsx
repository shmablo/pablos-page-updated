import { ActionIcon, Button, Group, useMantineColorScheme } from "@mantine/core";
import { IconBrightnessUp, IconMoonStars } from "@tabler/icons-react"
import { useState } from "react";

export default function Navbar(){
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    
    const isLight = colorScheme === 'light'

    return(
        <>
            <Group justify="space-between">
                <ActionIcon m={"xs"}>
                    
                </ActionIcon>

                <Group>
                    <Button 
                    variant="transparent"
                    >
                        About
                    </Button>

                    <Button 
                    variant="transparent"
                    >
                        Journal
                    </Button>

                    <Button 
                    variant="transparent"
                    >
                        Projects
                    </Button>

                    <Button 
                    variant="transparent"
                    >
                        Gallery
                    </Button>
                </Group>

                <ActionIcon variant="subtle" size={'lg'} m={"xs"} onClick={() => toggleColorScheme()}>
                    {isLight ? <IconBrightnessUp /> : <IconMoonStars/>}
                </ActionIcon>
            </Group>
        </>
    )
}