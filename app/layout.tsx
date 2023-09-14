"use client";
import Header from "@components/layout/Header";
import Providers from "@providers/providers";
import { useSession } from "next-auth/react";
import "@styles/globals.css";
import Footer from "@components/layout/Footer";
import Wave from "@components/wave/Wave";

export const metedata = {
  title: "",
  description: "",
};
type Props = {
  children: React.ReactNode;
};
const rootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <body className="min-h-[100vh]">
        <Providers>
          <Header />
          <main className="app bg-gray py-16 max-w-[1400px] min-h-[90vh]">
            {children}
          </main>
          <Wave />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default rootLayout;
