import type { Metadata } from "next";
import "./globals.css";
import Head from '@/reuseComps/header/page'
import Foot from '@/reuseComps/footer/page'


export const metadata: Metadata = {
  title: "Nwando Spetialist Hospital",
  description: "Modernized approach to orthopedic cases in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" lg:w-[70%] ml-auto mr-auto bg-black sm:w-full">
        <Head />
          {children}
        <Foot />
      </body>
    </html>
  );
}
