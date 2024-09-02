import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle's Website",
  description:
    "This is my website, which contains all of my past projects, experiences, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://stats.superfx.dev/script.js"
          data-website-id="09dca433-66b6-4799-a145-5b4d2e20d307"
        />
      )}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
