"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

import { ReactNode } from "react";

const theme = createTheme({
  // Add themes as needed
  colors: {
    blue: [
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
    ],
    yellow: [
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    red: ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
  },
});

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <SessionProvider>{children}</SessionProvider>
    </MantineProvider>
  );
};
