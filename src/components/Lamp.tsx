import { Box, Button, Center, Space } from "@mantine/core";

export const Lamp = () => {
  return (
    <Box>
      <Box style={{ height: "100vh" }}>
        <Center style={{ height: "25%" }}>
          <Button
            style={{
              width: "75%",
              height: "150px",
              backgroundColor: "#333",
              borderRadius: "50px 50px 0px 0px",
            }}
          />
        </Center>
        <Center style={{ height: "75%" }}>
          <Box
            style={{ width: "10%", height: "100%", backgroundColor: "#333" }}
          />
        </Center>
      </Box>
    </Box>
  );
};
