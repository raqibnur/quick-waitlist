import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({subsets: ["latin"]});

const siteName = "Quick Waitlist";
const siteDescription = "Quick Waitlist and coming soon page for your SAAS and website.";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <main className="flex justify-center items-center min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
