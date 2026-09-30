import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Amit Jogiya — Video Editor & Visual Storyteller",
  description:
    "Professional video editor creating cinematic, engaging and high-performing visual content for brands and creators.",
  openGraph: {
    title: "Amit Jogiya — Video Editor & Visual Storyteller",
    description:
      "Professional video editor creating cinematic, engaging and high-performing visual content for brands and creators.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
