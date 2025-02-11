import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { PiCalendarBlankLight, PiHouseLight } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Date with Me?",
  description: "",
  icons: {
    icon: "/icon.ico",
  },
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Link href="/" className="absolute top-0 p-4">
          <PiHouseLight size={30} />
        </Link>

        <div className="mx-auto max-w-[1200px] mt-8">{children}</div>

        <Link href="/stats" className="p-4 text-2xl fixed bottom-0 right-0">
          <PiCalendarBlankLight size={30} />
        </Link>
      </body>
    </html>
  );
}
