import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Vein } from "@/app/components/vein";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
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
        className={cn(
          "min-h-screen text-foreground antialiased",
          ibmPlexMono.variable
        )}
      >
        <div className="absolute inset-0 -z-20 bg-background" />
        <Vein />
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}