"use client";

import { Box, Group, Image } from "@mantine/core";

export const Frameworks = () => {
  return (
    <Box>
      <Group>
        <Image
          src="https://utfs.io/f/6cec46fa-d49f-480f-b875-964225c3792d-20eer.png"
          h={72}
          w={72}
          alt="Next"
        />
        <Image
          src="https://utfs.io/f/e3892ea3-6d89-41d2-be4e-2496b69b5802-1sj3pb.png"
          h={72}
          w={72}
          alt="React"
        />
        <Image
          src="https://utfs.io/f/e1c5d774-9034-4d27-bac4-83609a2c0cf7-m0jdt1.png"
          h={72}
          w={144}
          alt="Django"
        />
        <Image
          src="https://utfs.io/f/c89ce08c-0926-4b1f-bbc7-2e4306bab049-mj0jnj.png"
          h={72}
          w={72}
          alt="Spring Boot"
        />
      </Group>
    </Box>
  );
};
