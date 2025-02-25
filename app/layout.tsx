import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

const helvetica = localFont({
  src: [
    { path: "../public/helveticaneue-medium.woff2", weight: "500" },
    {
      path: "../public/helveticaneue.woff2",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "BeTalent",
  description: "Tabela de empregados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helvetica.className}>
      <body className={`${roboto.variable} antialiased bg-gray-00`}>
        {children}
      </body>
    </html>
  );
}
