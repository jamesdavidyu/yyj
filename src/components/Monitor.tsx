"use client";

import { Box, Center, Text } from "@mantine/core";
import { LoginForm } from "./LoginForm";

export const Monitor = () => {
  return (
    <Box
      style={{
        height: "95vh",
      }}
    >
      <Center style={{ height: "100%" }}>
        <Box
          style={{
            width: "50vw",
            height: "66vh",
            borderRadius: "15px",
            border: "10px solid #333",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            backgroundColor: "navy",
            position: "relative",
          }}
        >
          <Box
            style={{
              height: "66vh",
            }}
          >
            <Center style={{ height: "100%" }}>
              <LoginForm />
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
