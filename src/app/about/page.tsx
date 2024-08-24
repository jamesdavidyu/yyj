import {
  Box,
  Button,
  Card,
  Center,
  Grid,
  GridCol,
  Image,
  Space,
  Text,
} from "@mantine/core";

const Recruiters = () => {
  return (
    <Box>
      <Box style={{ height: "25vh" }}>
        <Center style={{ height: "100%" }}>
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
          <Button fw="normal" bg="black" td="underline">
            Cloud
          </Button>
        </Center>
      </Box>
      <Box style={{ height: "75vh" }}>
        <Center style={{ flexDirection: "column" }}>
          <Text c="white">Projects</Text>
          <Grid>
            <GridCol span={6}>
              <Card></Card>
            </GridCol>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default Recruiters;
