"use client";

import {
  Box,
  Button,
  Center,
  PasswordInput,
  TextInput,
  Text,
  Image,
} from "@mantine/core";
import { useState } from "react";

export const LoginForm = () => {
  const [login, setLogin] = useState(true);

  const openLogin = () => {
    setLogin((prev) => !prev);
  };

  return (
    <Box>
      {login ? (
        <Box>
          <Center>
            <Image
              src="https://utfs.io/f/83acf69d-8644-4b12-a4ee-eb3508732d7b-xbioow.png"
              onClick={openLogin}
              h="310.875px"
              w="247.25px"
              style={{ cursor: "pointer" }}
            />
          </Center>
        </Box>
      ) : (
        <form>
          <Text fz="h1" fw="bold" c="white">
            welcome back!
          </Text>
          <br />
          <TextInput placeholder="Email" />
          <br />
          <PasswordInput placeholder="Password" />
          <br />
          <Center>
            <Button c="black" bg="yellow">
              Login
            </Button>
          </Center>
        </form>
      )}
    </Box>
  );
};
