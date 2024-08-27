"use client";

import { Box, Group, Image } from "@mantine/core";

export const Cloud = () => {
  return (
    <Box>
      <Group>
        <Image
          src="https://utfs.io/f/b590f013-c0b2-4166-8aef-f9430a4ca4fd-dk6j3t.png"
          h={72}
          w={72}
          alt="Vercel"
        />
        <Image
          src="https://utfs.io/f/72df50f8-3c93-4a65-8b7e-11f6c3e09312-26b7.svg"
          h={72}
          w={72}
          alt="Fly.io"
        />
        <Image
          src="https://utfs.io/f/b2db0c49-4824-43b4-816d-094ab300115e-1pysc4.png"
          h={72}
          w={72}
          alt="MongoDB"
        />
        <Image
          src="https://utfs.io/f/e947aa1f-326e-4897-aa8f-9cb8bd70b916-22v1.webp"
          h={72}
          w={72}
          alt="AWS"
        />
      </Group>
    </Box>
  );
};
