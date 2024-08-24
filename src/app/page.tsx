import { Lamp } from "@/components/Lamp";
import { Monitor } from "@/components/Monitor";
import { Phone } from "@/components/Phone";
import { Box, Center, Grid, GridCol, Text } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Grid>
        <GridCol span={3}>
          <Lamp />
        </GridCol>
        <GridCol span={6}>
          <Monitor />
        </GridCol>
        <GridCol span={3}>
          <Phone />
        </GridCol>
      </Grid>
    </main>
  );
}
