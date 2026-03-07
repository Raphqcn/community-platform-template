import type { Metadata } from "next";
import Header from "./components/ui/header";
import './globals.css';

export const metadata: Metadata = {
  title: `Unnova Esport`,
  description: "Structure esportive française Overwatch et multigaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
