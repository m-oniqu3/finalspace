import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final Space Wiki",
  description:
    "A fan-made wiki for the TV show Final Space. Find characters, locations, episodes, and quotes. Save your favourites to your own personal collection.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
