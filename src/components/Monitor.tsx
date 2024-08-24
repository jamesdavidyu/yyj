"use client";

import { Box, Center, Text } from "@mantine/core";
import { Login } from "./Login";
import { screenHeight } from "@/utils/utils";

export const Monitor = () => {
  return (
    <Box
      style={{
        height: "100vh",
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
            backgroundColor: "#000",
            position: "relative",
          }}
        >
          <Box
            style={{
              height: "66vh",
            }}
          >
            <Center style={{ height: "100%" }}>
              <Login />
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
