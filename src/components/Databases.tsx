"use client";

import { Box, Group, Image } from "@mantine/core";

export const Databases = () => {
  return (
    <Box>
      <Group>
        <Image
          src="https://utfs.io/f/34331b9c-04d9-46fe-bf2b-80b6b4d78a23-ytjru4.png"
          h={72}
          w={72}
          alt="PostgreSQL"
        />
        <Image
          src="https://utfs.io/f/47a62486-9094-4b32-922f-d91d58a7521e-estkac.png"
          h={72}
          w={144}
          alt="SQLite"
        />
        <Image
          src="https://utfs.io/f/b2db0c49-4824-43b4-816d-094ab300115e-1pysc4.png"
          h={72}
          w={72}
          alt="MongoDB"
        />
      </Group>
    </Box>
  );
};
