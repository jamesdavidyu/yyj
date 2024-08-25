import { Languages } from "@/components/Languages";
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
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Image,
  Space,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from "@mantine/core";

const Recruiters = () => {
  return (
    <Box>
      <Box style={{ height: "25vh" }}>
        <br />
        <Grid>
          <GridCol
            span={4.5}
            style={{
              display: "flex",
              justifyContent: "right",
              paddingRight: "20px",
            }}
          >
            <a href="https://www.linkedin.com/in/jamesdavidyu">
              <Image
                src="https://utfs.io/f/989d0be6-0ea2-4a57-b434-75774fff8c8b-ifr4me.jpeg"
                h="139.875px"
                w="111.375px"
                radius="md"
                alt="James Yu Headshot"
              />
            </a>
          </GridCol>
          <GridCol span={7.5}>
            <Group>
              <Text fz="h1" fw="bold" c="white">
                Hi!
              </Text>
              <Text c="white">
                My name is{" "}
                <HoverCard>
                  <HoverCardTarget>
                    <a
                      href="https://www.linkedin.com/in/jamesdavidyu"
                      style={{ color: "cyan" }}
                    >
                      James Yu.
                    </a>
                  </HoverCardTarget>
                  <HoverCardDropdown bg="#333" style={{ borderColor: "black" }}>
                    <a href="mailto:jamesdavidyu@gmail.com">
                      <Text c="white">jamesdavidyu@gmail.com</Text>
                    </a>
                  </HoverCardDropdown>
                </HoverCard>{" "}
                I am a full-stack developer in:
              </Text>
            </Group>
            <Group>
              <Tabs defaultValue="languages" color="white" c="white">
                <TabsList>
                  <TabsTab value="languages">Languages</TabsTab>
                  <TabsTab value="databases">Databases</TabsTab>
                  <TabsTab value="frameworks">Frameworks</TabsTab>
                  <TabsTab value="cloud">Cloud</TabsTab>
                </TabsList>
                <TabsPanel value="languages">
                  <br />
                  <Languages />
                </TabsPanel>
              </Tabs>
            </Group>
          </GridCol>
        </Grid>
      </Box>
      <br />
      <Box style={{ height: "75vh" }}>
        <Center style={{ flexDirection: "column" }}>
          <Text c="white" fz="h2" fw="bold">
            Projects
          </Text>
          <br />
          <Card bg="#333" w={360}>
            <CardSection>
              <a href="https://www.youyoungjune.com">
                <Image
                  src="https://utfs.io/f/d4c48a2e-2ec5-4504-9e01-5309603b8a09-grpbos.png"
                  width={360}
                  height={218.5}
                  alt="youyoungjune.com preview"
                />
              </a>
            </CardSection>
            <br />
            <a href="https://www.youyoungjune.com">
              <Button fullWidth>youyoungjune.com</Button>
            </a>
            <br />
            <Text size="sm" c="white">
              My arts portfolio with JWT authentication &#40;users need to log
              in to see the content&#41;, written in Typescript
              &#40;Next.js&#41; and Java &#40;Spring Boot&#41; with MongoDB
              &#40;Atlas&#41;.
            </Text>
            <br />
            <Group justify="space-between">
              <a href="https://github.com/jamesdavidyu/yyj">
                <Button bg="red">Frontend Repo</Button>
              </a>
              <a href="https://github.com/jamesdavidyu/yyjApi">
                <Button bg="yellow" c="black">
                  Backend Repo
                </Button>
              </a>
            </Group>
          </Card>
        </Center>
      </Box>
    </Box>
  );
};

export default Recruiters;
