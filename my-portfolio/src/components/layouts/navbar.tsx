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
      <div className="flex max-w-screen-2xl w-full justify-between items-center gap-8 h-18 md:px-2.5 lg:px-8 my-4 scale-70">
        <div className="flex md:hidden items-start">
          <Image
            src="/images/Rectangle 40.png"
            alt="logo"
            width={107}
            height={35}
            className="pl-2"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex items-start">
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
        </div>
        <div className="hidden lg:flex items-center mx-auto pl-20">
          <Image
            src="/images/portfolio2.svg"
            alt="logo"
            width={107}
            height={35}
            className="w-auto h-20 brightness-110 contrast-125 scale-75"
            loading="lazy"
          />
        </div>
        <div className="ml-auto scroll-px-3.5 text-lg font-medium px-3 items-end">
          <ul className="flex space-x-12 subpixel-antialiased hover:cursor-pointer hover:font-semibold">
            <li className="mb-4">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-blue-500 font-bold" : "text-gray-700"
                } hover:text-green-200 transition-colors duration-200`}
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/portfolio"
                className={`${
                  pathname === "/portfolio"
                    ? "text-blue-500 font-bold"
                    : "text-gray-700"
                } hover:text-green-200 transition-colors duration-200`}
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "text-blue-500 font-bold"
                    : "text-gray-700"
                } hover:text-green-200 transition-colors duration-200`}
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
