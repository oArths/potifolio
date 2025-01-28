import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const KanitFont = Kanit({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--kanit",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${KanitFont.variable}  antialiased`}>{children}</body>
    </html>
  );
}
