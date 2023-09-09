"use client";
import Header from "@components/layout/Header";
import Providers from "@providers/providers";
import { useSession } from "next-auth/react";
import "@styles/globals.css";

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
      <body>
        <Providers>
          <Header />
          <main className="app bg-gray py-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default rootLayout;
