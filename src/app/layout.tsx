import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/context/AppContext";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "CSquad Token Manager",
  description: "Manage your CSQ tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
