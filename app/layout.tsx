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
          <div className="main">
            <div className="grandiant" />
          </div>
          <main className="app">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default rootLayout;
