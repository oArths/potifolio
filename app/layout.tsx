import './styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const DraperFont = localFont({
  src: '../public/font/Draper.otf',
  display: 'swap',
  variable: '--font-draper',
});

export const metadata: Metadata = {
  title: 'Protifolio',
  description: 'Protifolio profissional de desenvolvimento web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={DraperFont.variable}>{children}</body>
    </html>
  );
}
