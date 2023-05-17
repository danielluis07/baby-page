import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Bebê Fofinho",
  description: "Uma Experiência saudável e prazerosa para o seu pequeno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/public/favicon.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
