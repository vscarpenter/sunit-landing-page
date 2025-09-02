import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunit S. Carpenter | Principal Data Scientist & Solutions Architect",
  description: "Accomplished Principal Data Scientist and Microsoft Solutions Architect with 25+ years of experience delivering data-driven solutions across enterprise software, government, and defense sectors.",
  keywords: "Data Scientist, Machine Learning, Microsoft Architect, Azure, SharePoint, Python, Analytics",
  authors: [{ name: "Sunit S. Carpenter" }],
  openGraph: {
    title: "Sunit S. Carpenter | Principal Data Scientist & Solutions Architect",
    description: "Accomplished Principal Data Scientist and Microsoft Solutions Architect with 25+ years of experience delivering data-driven solutions across enterprise software, government, and defense sectors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
