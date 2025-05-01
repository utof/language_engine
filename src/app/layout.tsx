import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css"; // Your new globals.css file
import { cn } from "@/lib/utils";

// We'll load IBM Plex Mono and assign it to the --font-mono CSS variable
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono", // Assign to the --font-mono variable
});

export const metadata: Metadata = {
  title: "∴ Language Engine",
  description: "A system for recursive expression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // We use font-mono as the base font for the entire project
        className={cn(
          "min-h-screen bg-background font-mono text-foreground antialiased",
          ibmPlexMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}