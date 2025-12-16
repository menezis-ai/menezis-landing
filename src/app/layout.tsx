import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menezis | AI-Driven Cloud Infrastructure",
  description: "Native MCP Integration. Post-Quantum Security. Sovereign Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${inconsolata.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
