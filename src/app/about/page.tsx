import {
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Center,
  Grid,
  GridCol,
  Group,
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
          <Text c="white" fz="h2" fw="bold">
            Projects
          </Text>
          <br />
          <Card bg="#333" w={360} h={390}>
            <CardSection>
              <Image
                src="https://utfs.io/f/d4c48a2e-2ec5-4504-9e01-5309603b8a09-grpbos.png"
                width={360}
                height={218.5}
              />
            </CardSection>
            <br />
            <a href="https://www.youyoungjune.com">
              <Button fullWidth>youyoungjune.com</Button>
            </a>
            <br />
            <Text size="sm" c="white">
              My music, art, and film portfolio with JWT authentication written
              in Typescript &#40;Next.js&#41; and Java &#40;Spring Boot&#41;.
            </Text>
          </Card>
        </Center>
      </Box>
    </Box>
  );
};

export default Recruiters;
