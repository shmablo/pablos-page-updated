'use client'

import { Center, Container, Title, Group, ActionIcon, Stack } from "@mantine/core";
import { IconBrandLinkedin } from '@tabler/icons-react'

export default function HomePage() {

  const demoProps = {
    h: 50,
    mt: '55px',
  };

  return (
    <>
      <Container {...demoProps}>
        <Center>
          <Stack>
            <Title>Pablo Ramos</Title>

            <Group>
              <ActionIcon
                component="a"
                variant="transparent"
                size="xl"
                href="https://www.linkedin.com/in/pabloramos06/"
                >
                  <IconBrandLinkedin />
              </ActionIcon>
            </Group>
          </Stack>
        </Center>
      </Container>
    </>
);
}
