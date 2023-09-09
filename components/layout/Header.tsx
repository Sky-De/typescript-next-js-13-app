"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import Image from "next/image";
import Avatar from "@public/img/Avatar.png";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(session?.user);
  // FIX-remove this log

  const handleAuth = () => {
    // isLogin
    if (!session?.user) {
      router.push("/auth", { scroll: false });
      return;
    }
    // isLogout
    signOut();
  };

  const handleHomeBtn = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className="shadow-lg py-1 md:py-2 w-full">
      <div className="header_content max-w-1400 mx-auto flex items-center gap-3 py-1 px-3">
        <Link href="/">
          <h1
            title="Home"
            className="logo cursor-pointer"
            onClick={handleHomeBtn}
          >
            AI-Share
          </h1>
        </Link>

        {session?.user && (
          <Link
            title="create new post"
            href="/create-post"
            className="callToActionBtn rounded-md text-white hover:translate-y-[-2px] ease-in duration-100 ml-auto"
          >
            Create Post
          </Link>
        )}
        <button
          title="auth"
          onClick={handleAuth}
          className={`authBtn px-3 py-1 rounded-lg ${
            session ? "" : "ml-auto"
          } `}
        >
          {session?.user ? "LogOut" : "LogIn"}
        </button>

        {session?.user && (
          <Link href="/profile" title="profile">
            <Image
              className="rounded-full"
              width={45}
              height={45}
              src={session.user.image || Avatar}
              alt="profile"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenuHandler = (): void => {
    setIsOpen(!isOpen);
  };
  return <nav>nav</nav>;
};
