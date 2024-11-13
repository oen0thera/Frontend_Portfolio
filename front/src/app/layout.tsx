import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import GNB from "@/components/GNB/GNB";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "[FrontEnd][oen0thera] Kim-WonJin Portfolio",
  description: "github: https://github.com/oen0thera",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export const neurimbo = localFont({
  src: "../../public/fonts/neurimboGothicRegular.otf",
  display: "swap",
  variable: "--font-neurimbo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.body_wrapper}>
          <GNB />
          {children}
        </div>
      </body>
    </html>
  );
}
