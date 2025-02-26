import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const KanitFont = Kanit({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--kanit",
  subsets: ["latin"],
  display: "swap",
});
const DraperFont = localFont({
  src: "../public/font/Draper.otf",
  display: "swap",
  variable: "--font-draper",
});

export const metadata: Metadata = {
  title: "Protifolio",
  description: "Protifolio profissional de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${KanitFont.variable} ${DraperFont.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
