'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider } from "../lib/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </AuthProvider>
    </ThemeProvider>
  );
}
