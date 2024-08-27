"use client";

import { Box, Group, Image } from "@mantine/core";

export const Languages = () => {
  return (
    <Box>
      <Group>
        <Image
          src="https://utfs.io/f/f5d9dfd5-a566-46ae-83f0-8094a153a1a4-g3ezok.png"
          h={72}
          w={72}
          alt="Python"
        />
        <Image
          src="https://utfs.io/f/8f68be8b-4a32-4709-a1dc-ab1fe6edce6c-2js.png"
          h={72}
          w={144}
          alt="Go"
        />
        <Image
          src="https://utfs.io/f/0c063887-ad21-4361-83f9-5d22f9c9d653-8myeez.png"
          h={72}
          w={72}
          alt="Typescript"
        />
        <Image
          src="https://utfs.io/f/18697db9-42df-4a31-b981-ababe7b32bb7-1xrfm.png"
          h={72}
          w={72}
          alt="Java"
        />
        {/* <Image
          src="https://utfs.io/f/046f46b9-9684-4366-a8e0-273a20e912a6-1wvcb.png"
          h={72}
          w={72}
          alt="HTML"
        />
        <Image
          src="https://utfs.io/f/1847ff99-a368-48da-abde-edd3f1579a82-248z.png"
          h={80}
          w={80}
          alt="CSS"
        /> */}
      </Group>
    </Box>
  );
};
