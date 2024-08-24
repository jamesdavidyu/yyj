"use client";

import { Box, Center } from "@mantine/core";
import { SignUpForm } from "./SignUpForm";

export const Phone = () => {
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
            backgroundColor: "darkblue",
            position: "relative",
          }}
        >
          <Box
            style={{
              height: "50vh",
            }}
          >
            <Center style={{ height: "100%", flexDirection: "column" }}>
              <SignUpForm />
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
