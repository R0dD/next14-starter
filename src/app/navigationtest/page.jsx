"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(`pathname = ${pathname}`);

  const query = searchParams.get("q");
  console.log(`query = ${query}`);

  const handleClick = () => {
    console.log("clicked");
    //router.push("/");
    //router.replace("/");
    //router.refresh();
    //router.back();
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
