import {
  Box,
  Button,
  Center,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export const SignUpForm = () => {
  const [signUp, setSignUp] = useState(true);

  const openSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <Box>
      {signUp ? (
        <Box>
          <Text c="white" fw="bold" fz="xl">
            Don&#39;t have an account?
          </Text>
          <Center>
            <Button bg="red" onClick={openSignUp}>
              Sign Up
            </Button>
          </Center>
        </Box>
      ) : (
        <form>
          <TextInput placeholder="Email" />
          <br />
          <PasswordInput placeholder="Password" />
          <br />
          <PasswordInput placeholder="Confirm password" />
          <br />
          <Center>
            <Button bg="red">Sign Up</Button>
          </Center>
        </form>
      )}
    </Box>
  );
};
