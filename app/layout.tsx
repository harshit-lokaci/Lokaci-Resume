import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ResumeProvider } from "./context/ResumeContext";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokaci.com | Resume Builder",
  description:
    "Build professional resumes quickly and easily with Lokaci.com. Stand out to employers with a polished CV.",
  icons: {
    icon: "/logo.png", // displayed in the browser tab
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}
