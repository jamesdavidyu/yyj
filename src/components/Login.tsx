"use client";
import {
  Box,
  Button,
  Center,
  PasswordInput,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { IconEyeOff, IconEyeCheck, IconEyeClosed } from "@tabler/icons-react";

export const Login = () => {
  return (
    <Box>
      <form>
        <TextInput placeholder="Email or username" />
        <br />
        <PasswordInput placeholder="Password" />
        <br />
        <Center>
          <Button>Login</Button>
        </Center>
      </form>
    </Box>
  );
};
