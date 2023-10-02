"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce</title>
        <meta name="description" content="E-commerce boilerplate." />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
