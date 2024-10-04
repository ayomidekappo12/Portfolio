"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row max-w-screen-2xl w-full justify-between items-center gap-8 h-18 px-8 my-4 transform scale-70">
        <Link href="/">
          <Image
            src="/images/logo2.svg"
            alt="logo"
            width={107}
            height={35}
            className="m-1 brightness-110 contrast-125"
            loading="lazy"
          />
        </Link>
        <div className="flex items-center gap-6 ml-80 pl-2">
          <Image
            src="/images/portfolio2.svg"
            alt="logo"
            width={107}
            height={35}
            className="w-40 brightness-110 contrast-125 scale-150"
            loading="lazy"
          />
        </div>
        <div className="ml-auto scroll-px-3.5 text-lg font-medium">
          <ul className="flex space-x-12 subpixel-antialiased">
            <li className="mb-4">
              <Link
                href="/"
                className={`hover:cursor-pointer hover:font-semibold ${
                  pathname === "/" ? "text-blue-500 font-bold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/portfolio"
                className={`hover:cursor-pointer hover:font-semibold ${
                  pathname === "/portfolio" ? "text-blue-500 font-bold" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/contact"
                className={`hover:cursor-pointer hover:font-semibold ${
                  pathname === "/contact" ? "text-blue-500 font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
