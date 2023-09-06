"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // FIX-change this any type
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(res);
    })();
  }, []);

  useEffect(() => {
    if (session?.user) {
      router.push("/", { scroll: false });
    }
  }, [session?.user]);

  return (
    <div className="flex flex-col gap-5 text w-full h-[80vh] items-center justify-center">
      {/* FIX--replace with loading component */}
      <h2 className="auth_title">Choose your prefer provider</h2>
      {!providers && <h1>Loading...</h1>}
      {providers &&
        Object.values(providers).map((provider: any) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className="black_btn"
          >
            {provider.name}
          </button>
        ))}
    </div>
  );
};

export default page;
