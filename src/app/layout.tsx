import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gourav Mishra (gouravmarch20) - Full Stack Developer Portfolio",
  description:
    "Official portfolio of Gourav Mishra, also known as gouravmarch20. Full Stack Developer specializing in React, Next.js, Node.js, and high-performance web applications.",
  keywords:
    "gouravmarch20, Gourav Mishra, Full Stack Developer, React Developer, Next.js Developer, MERN Stack, Portfolio, Web Developer India",
  authors: [{ name: "Gourav Mishra (gouravmarch20)" }],
  openGraph: {
    title: "Gourav Mishra (gouravmarch20) - Full Stack Developer",
    description:
      "Explore the portfolio of Gourav Mishra (gouravmarch20), a full-stack developer skilled in React, Next.js, MongoDB, Node.js, TypeScript, and scalable web solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
