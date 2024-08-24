import { Box, Center, Grid, Image, Space, Text } from "@mantine/core";

const Recruiters = () => {
  return (
    <Box>
      <Box style={{ height: "25vh" }}>
        <Center style={{ height: "150%" }}>
          <Image
            src="https://utfs.io/f/989d0be6-0ea2-4a57-b434-75774fff8c8b-ifr4me.jpeg"
            h="139.875px"
            w="111.375px"
            radius="md"
          />
          <Box>
            <h1
              style={{
                color: "white",
                paddingLeft: "20px",
                paddingRight: "10px",
              }}
            >
              Hello!
            </h1>
          </Box>
          <Box>
            <p style={{ color: "white" }}>I am a full-stack developer</p>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Recruiters;
