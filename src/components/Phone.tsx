import { Box, Center, Text } from "@mantine/core";

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
            backgroundColor: "#000",
            position: "relative",
          }}
        >
          <Box
            style={{
              height: "50vh",
            }}
          >
            <Center style={{ height: "100%" }}>
              <Text>Test</Text>
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
