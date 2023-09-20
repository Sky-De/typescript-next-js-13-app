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

  const handleAuth = () => {
    // isLogin
    if (!session?.user) {
      router.push("/auth", { scroll: false });
      return;
    }
    // isLogout
    signOut();
    router.push("/", { scroll: false });
  };

  const handleHomeBtn = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className="header shadow-lg py-2 md:py-3 w-full">
      <div className="header__content max-w-1400 mx-auto flex items-center gap-3 py-1 px-3">
        <Link href="/">
          <h1
            title="Home"
            className="logo cursor-pointer"
            onClick={handleHomeBtn}
          >
            <span>AI-S</span>
            <span className="hidden SE:inline-block">hare</span>
          </h1>
        </Link>

        {session?.user && (
          <Link
            title="create new post"
            href="/create-post"
            className="py-1 px-4 bg-[#e75fbc] rounded-md text-white hover:translate-y-[-2px] ease-in duration-100 ml-auto"
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
