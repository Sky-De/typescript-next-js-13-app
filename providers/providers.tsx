"use client";

import { SessionProvider } from "next-auth/react";
type Props = {
  children: React.ReactNode;
  session?: any;
};
const Providers = ({ children, session }: Props) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Providers;
