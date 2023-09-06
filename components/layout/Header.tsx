"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Avatar from "@public/img/Avatar.png";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleAuth = () => {
    if (!session?.user) {
      router.push("/auth", { scroll: false });
      return;
    }
    signOut();
  };

  const handleHomeBtn = () => {
    router.push("/", { scroll: false });
  };

  const handleProfileBtn = () => {
    router.push("/profile", { scroll: false });
  };

  return (
    <header className="border-1 border-purple-500">
      <div className="header_content max-w-1400 mx-auto flex items-center gap-3 py-1 px-3 border border-red-400">
        <div className="logo cursor-pointer" onClick={handleHomeBtn}>
          LOGO
        </div>
        <button
          onClick={handleAuth}
          className="authBtn ml-auto  px-3 py-1 rounded-lg"
        >
          {session?.user ? "LogOut" : "LogIn"}
        </button>
        {session?.user && (
          <button
            onClick={handleProfileBtn}
            className="authBtn px-3 py-1 rounded-lg"
          >
            Profile
          </button>
        )}
        {session && (
          // FIX--add user image to src
          <Image
            src={Avatar}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
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
