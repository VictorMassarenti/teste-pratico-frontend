import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";

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
      <body className={`${roboto.variable} antialiased`}>
        <div className="flex bg-card shadow h-[60px] items-center md:pl-8 pl-4">
          <Image
            src="https://res.cloudinary.com/dacau0kal/image/upload/v1740512489/teste-tecnico-betalent/o9zys93dgqp9gkcdidfj.webp"
            width={92}
            height={34}
            alt="logo"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
