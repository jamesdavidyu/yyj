import { Monitor } from "@/components/Monitor";
import { Box, Center, Grid, GridCol, Text } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <div>
        <Grid>
          <GridCol span={4}>
            <Text>Test</Text>
          </GridCol>
          <GridCol span={4}>
            <Monitor />
          </GridCol>
          <GridCol span={4}>
          </GridCol>
        </Grid>
      </div>
          
    </main>
  );
}
