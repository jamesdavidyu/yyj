"use client";

import { Box, Button, Center, Space } from "@mantine/core";
import { useState } from "react";

export const Lamp = () => {
  const [light, setLight] = useState(false);

  const lightSwitch = () => {
    setLight((prev) => !prev);
  };

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
            onClick={lightSwitch}
          />
        </Center>
        {light ? (
          <Center style={{ height: "75%" }}>
            <Box
              style={{ width: "10%", height: "100%", backgroundColor: "#333" }}
            />
          </Center>
        ) : (
          <Center style={{ height: "75%" }}>
            <Box
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, gold, #000)",
                clipPath: "polygon(13% 0, 87% 0%, 100% 100%, 0 100%)",
              }}
            />
          </Center>
        )}
      </Box>
    </Box>
  );
};
