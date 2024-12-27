import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import GNB from "@/components/GNB/GNB";
import styles from "./layout.module.scss";
import StoreProvider from "@/store/Provider/StoreProvider";
import Modal from "@/components/Modal/Modal";

export const metadata: Metadata = {
  title: "[FrontEnd][oen0thera] Kim-WonJin Portfolio",
  description: "github: https://github.com/oen0thera",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

const neurimbo = localFont({
  src: "../../public/fonts/neurimboGothicRegular.otf",
  variable: "--font-neurimbo",
});

const pretendard = localFont({
  src: "../../public/fonts/Pretendard-Regular.otf",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={`${neurimbo.variable} ${pretendard.variable}`}>
          <StoreProvider>
            <Modal />
            <GNB />
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
