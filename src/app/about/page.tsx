import { Box, Button, Center, Grid, Image, Space, Text } from "@mantine/core";

const Recruiters = () => {
  return (
    <Box>
      <Box style={{ height: "25vh" }}>
        <Center style={{ height: "150%" }}>
          <Box>
            <Image
              src="https://utfs.io/f/989d0be6-0ea2-4a57-b434-75774fff8c8b-ifr4me.jpeg"
              h="139.875px"
              w="111.375px"
              radius="md"
              alt="James Yu Headshot"
            />
          </Box>
          <Box>
            <h1
              style={{
                color: "white",
                paddingLeft: "20px",
                paddingRight: "10px",
              }}
            >
              Hi!
            </h1>
          </Box>
          <Box>
            <p style={{ color: "white" }}>I am a full-stack developer in:</p>
          </Box>
          <Button fw="normal" bg="black" td="underline">
            Languages
          </Button>
          <Button fw="normal" bg="black" td="underline">
            Databases
          </Button>
          <Button fw="normal" bg="black" td="underline">
            Frameworks
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Recruiters;
