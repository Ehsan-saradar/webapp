import type { Metadata } from "next";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import WagmiProviderComp from "@/lib/wagmi-provider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/config";
import { createTheme, DirectionProvider, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <html lang="en">
      <body>
        <DirectionProvider>
          <MantineProvider theme={theme}>
            <WagmiProviderComp initialState={initialState}>
              {children}
            </WagmiProviderComp>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
