import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renance DevTools - One command to rule them all",
  description: "Unified CLI ecosystem for modern power users and developers. 200+ specialized commands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
