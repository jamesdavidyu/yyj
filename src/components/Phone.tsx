"use client";

import {
  Box,
  Button,
  Center,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export const Phone = () => {
  const [signUp, setSignUp] = useState(true);

  const openSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <Box
      style={{
        height: "100vh",
      }}
    >
      <Center style={{ height: "100%" }}>
        <Box
          style={{
            width: "20vw",
            height: "50vh",
            borderRadius: "15px",
            border: "10px solid #333",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#000",
            position: "relative",
          }}
        >
          <Box
            style={{
              height: "50vh",
            }}
          >
            <Center style={{ height: "100%", flexDirection: "column" }}>
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
                  <TextInput placeholder="Username" />
                  <br />
                  <PasswordInput placeholder="Password" />
                  <br />
                  <PasswordInput placeholder="Confirm password" />
                  <br />
                  <Button bg="red">Sign Up</Button>
                </form>
              )}
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
