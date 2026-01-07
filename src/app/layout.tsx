import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import ConvexClientProvider from "@/providers/ConvexClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Link - AI Code Assistant",
  description:
    "Your AI-powered coding companion that helps you write, understand, and optimize code effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${mono.variable} antialiased`}>
          <ClerkProvider>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </ClerkProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
